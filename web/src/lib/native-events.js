export const getEventPosition = event => {
  const {nativeEvent} = event

  // mouse event
  const offsetX = nativeEvent?.offsetX
  const offsetY = nativeEvent?.offsetY

  if (offsetX && offsetY) return {x: offsetX, y: offsetY}

  // touch event
  const rect = event.target.getBoundingClientRect()
  const x = event?.targetTouches[0]?.pageX - rect.left
  const y = event?.targetTouches[0]?.pageY - rect.top

  return {x, y}
}
