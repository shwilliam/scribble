// reference: https://github.com/gragland/usehooks/blob/ea20f9c066bf9aa38239bbe542bc2178992675fd/src/pages/useWindowSize.md

import {useState} from 'react'

import {useMount} from './use-mount'

export const useWindowSize = () => {
  const isClient = typeof window === 'object'
  const [windowSize, setWindowSize] = useState(getSize)

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  useMount(() => {
    if (!isClient) return false

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return windowSize
}
