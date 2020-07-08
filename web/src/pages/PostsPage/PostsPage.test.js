import {render} from '@redwoodjs/testing'

import PostsPage from './PostsPage'

describe('PostsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostsPage />)
    }).not.toThrow()
  })
})
