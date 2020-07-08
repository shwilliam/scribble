const useClipboard = () => {
  const copy = text => {
    let data = text

    try {
      data = [new ClipboardItem({'text/plain': text})]
    } catch (error) {
      console.log(error)
    }

    return navigator.clipboard.writeText(data)
  }

  return {copy}
}

export default useClipboard
