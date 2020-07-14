import {useCssVar} from '@shwilliam/react-use-css-var'
import {useEffect, useRef, useState} from 'react'

import {useWindowSize} from 'src/hooks/use-window-size'
import {getPixelValueFromCssString} from 'src/lib/css'
import {getEventPosition} from 'src/lib/native-events'

const DrawingCanvas = ({onDraw = () => {}, defaultValue = ''}) => {
  const [getMaxCanvasSize] = useCssVar('--drawing-canvas-max-width')
  const [getLargeSpace] = useCssVar('--space-x-large') // horizontal margins
  const windowSize = useWindowSize()
  const drawingRef = useRef(defaultValue)
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
    drawingRef.current = base64
  }

  const handleMouseMove = event => {
    event.persist()
    if (!isDrawing) return

    const {x, y} = getEventPosition(event)
    contextRef.current.lineTo(x, y)
    contextRef.current.stroke()
  }

  useEffect(() => {
    if (!windowSize) return

    const canvas = canvasRef.current
    const singleCanvasMargin = getLargeSpace()
    const totalCanvasMargins =
      getPixelValueFromCssString(singleCanvasMargin, canvas) * 2
    const maxCanvasSize = getMaxCanvasSize()
    const maxCanvasSizePixels = getPixelValueFromCssString(
      maxCanvasSize,
      canvas,
    )
    const scaledWidth = windowSize?.width - totalCanvasMargins
    const canvasSize =
      scaledWidth > maxCanvasSizePixels ? maxCanvasSizePixels : scaledWidth
    const heightScale = 0.7
    const scaledHeight = canvasSize * heightScale

    canvas.style.width = `${canvasSize}px`
    canvas.style.height = `${scaledHeight}px`
    canvas.style.touchAction = 'none'
    // support high dpi displays
    canvas.width = canvasSize * 2
    canvas.height = 2 * scaledHeight

    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.scale(2, 2) // support high dpi displays

    if (drawingRef.current) {
      // paint existing drawing value
      const image = new Image()
      image.onload = () =>
        context.drawImage(image, 0, 0, canvasSize, scaledHeight)
      image.src = drawingRef.current
    }

    contextRef.current = context
  }, [defaultValue, getLargeSpace, getMaxCanvasSize, windowSize])

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
