import {useEffect, useRef, useState} from 'react'
import {useWindowSize} from 'react-use'
import {useCssVar} from '@shwilliam/react-use-css-var'

import {getEventPosition} from 'src/lib/native-events'

const DrawingCanvas = ({onDraw = () => {}, defaultValue = ''}) => {
  const [getMaxCanvasSize] = useCssVar('--drawing-canvas-max-width')
  const {width} = useWindowSize()
  const canvasRef = useRef()
  const contextRef = useRef()
  const [isDrawing, setIsDrawing] = useState(false)
  const [stroke, setStroke] = useState('#ff40ff')

  const handleStrokeChange = event => setStroke(event.target.value)

  const handleMouseDown = event => {
    event.persist()
    const {x, y} = getEventPosition(event)

    contextRef.current.strokeStyle = stroke
    contextRef.current.beginPath()
    contextRef.current.moveTo(x, y)

    setIsDrawing(true)
  }

  const handleMouseUp = () => {
    contextRef.current.closePath()
    setIsDrawing(false)

    const base64 = canvasRef.current.toDataURL()
    onDraw(base64)
  }

  const handleMouseMove = event => {
    event.persist()
    if (!isDrawing) return

    const {x, y} = getEventPosition(event)
    contextRef.current.lineTo(x, y)
    contextRef.current.stroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const maxCanvasSize = getMaxCanvasSize()
    const maxCanvasSizePixels = Number(maxCanvasSize.split('px')[0])
    const widthScale = 0.8
    const scaledWidth = width * widthScale
    const heightScale = 0.7
    const scaledHeight = scaledWidth * widthScale
    const canvasSize =
      scaledWidth > maxCanvasSizePixels ? maxCanvasSizePixels : scaledWidth

    canvas.style.width = `${canvasSize}px`
    canvas.style.height = `${canvasSize * heightScale}px`
    canvas.style.touchAction = 'none'
    // support high dpi displays
    canvas.width = canvasSize * 2
    canvas.height = canvasSize * 2 * heightScale

    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.scale(2, 2) // support high dpi displays

    if (defaultValue) {
      // paint default value
      const image = new Image()
      image.onload = () =>
        context.drawImage(image, 0, 0, scaledWidth, scaledHeight)
      image.src = defaultValue
    }

    contextRef.current = context
  }, [width, defaultValue, getMaxCanvasSize])

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
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
      />
    </section>
  )
}

export default DrawingCanvas
