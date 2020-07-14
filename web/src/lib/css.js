// reference: https://stackoverflow.com/a/10465984/9710329
export const getRenderedFontSize = el =>
  parseFloat(getComputedStyle(el).fontSize)

export const getPixelValueFromCssString = (str, parentEl) => {
  const value = Number(str.match(matchNumbers))
  const unit = str.replace(matchNumbers, '')

  switch (unit) {
    case 'px':
      return value
    case 'em':
      return value * getRenderedFontSize(parentEl)
    case 'rem':
      return value * getRenderedFontSize(document.getRootNode())
    default:
      console.error(`Unable to calculate pixel value from string "${str}"`)
      break
  }
}

const matchNumbers = /[0-9]+/
