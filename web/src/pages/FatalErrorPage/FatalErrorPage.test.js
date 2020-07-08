import {render} from '@redwoodjs/testing'

import FatalErrorPage from './FatalErrorPage'

describe('FatalErrorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FatalErrorPage />)
    }).not.toThrow()
  })
})
