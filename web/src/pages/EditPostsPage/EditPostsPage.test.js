import {render} from '@redwoodjs/testing'

import EditPostsPage from './EditPostsPage'

describe('EditPostsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPostsPage />)
    }).not.toThrow()
  })
})
