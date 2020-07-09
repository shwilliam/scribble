export const copyToClipboard = text => {
  let data = text

  try {
    data = [new ClipboardItem({'text/plain': text})]
  } catch (error) {
    console.warn(
      'ClipboardItem interface not supported\nhttps://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem#Browser_compatibility',
    )
  }

  return navigator.clipboard.writeText(data)
}
