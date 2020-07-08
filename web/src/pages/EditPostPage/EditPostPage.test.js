import {render} from '@redwoodjs/testing'

import EditPostPage from './EditPostPage'

describe('EditPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPostPage />)
    }).not.toThrow()
  })
})
