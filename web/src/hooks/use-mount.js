// reference: https://github.com/streamich/react-use/blob/d2e077ccb783e9e2de8585eef43038ecdb82f33f/src/useMount.ts

import {useEffectOnce} from './use-effect-once'

export const useMount = fn => {
  useEffectOnce(() => {
    fn()
  })
}
