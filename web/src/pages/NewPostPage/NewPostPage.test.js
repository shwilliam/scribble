import {render} from '@redwoodjs/testing'

import NewPostPage from './NewPostPage'

describe('NewPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewPostPage />)
    }).not.toThrow()
  })
})
