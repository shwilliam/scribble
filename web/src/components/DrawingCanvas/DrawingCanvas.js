import {useEffect, useRef, useState} from 'react'

const DrawingCanvas = ({
  width = 300,
  height = 300,
  onDraw = () => {},
  defaultValue = '',
}) => {
  const canvasRef = useRef()
  const contextRef = useRef()
  const [isDrawing, setIsDrawing] = useState(false)
  const [stroke, setStroke] = useState('#0000ff')

  const handleStrokeChange = event => setStroke(event.target.value)

  const handleMouseDown = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent

    contextRef.current.strokeStyle = stroke
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)

    setIsDrawing(true)
  }

  const handleMouseUp = () => {
    contextRef.current.closePath()
    setIsDrawing(false)

    const base64 = canvasRef.current.toDataURL()
    onDraw(base64)
  }

  const handleMouseMove = ({nativeEvent}) => {
    if (!isDrawing) return

    const {offsetX, offsetY} = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    // support high dpi displays
    canvas.width = width * 2
    canvas.height = width * 2

    // TODO: handle window resize

    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.scale(2, 2) // support high dpi displays

    if (defaultValue) {
      // paint default value
      const image = new Image()
      image.onload = () => context.drawImage(image, 0, 0, width, height)
      image.src = defaultValue
    }

    contextRef.current = context
  }, [width, height, defaultValue])

  return (
    <section className="drawing-canvas__wrapper">
      <div className="drawing-canvas__stroke">
        <label htmlFor="stroke" className="hide-screens">
          Stroke color
        </label>
        <input
          className="drawing-canvas__stroke-input"
          type="color"
          id="stroke"
          name="stroke"
          value={stroke}
          onChange={handleStrokeChange}
        />
      </div>
      <canvas
        className="drawing-canvas bordered"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </section>
  )
}

export default DrawingCanvas
