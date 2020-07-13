// reference: https://github.com/streamich/react-use/blob/d2e077ccb783e9e2de8585eef43038ecdb82f33f/src/useEffectOnce.ts

import {useEffect} from 'react'

export const useEffectOnce = effect => {
  useEffect(effect, [])
}
