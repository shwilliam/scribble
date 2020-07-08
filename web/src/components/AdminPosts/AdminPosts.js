import {Link, routes} from '@redwoodjs/router'
import {useFlash, useMutation} from '@redwoodjs/web'
import TimeTag from 'src/components/TimeTag'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const AdminPosts = ({posts}) => {
  const {addMessage} = useFlash()
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      addMessage('Post deleted.', {classes: 'rw-flash-success'})
    },
  })

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({variables: {id}, refetchQueries: ['POSTS']})
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <img src={post.image} alt="" />
              </td>
              <td>
                <TimeTag datetime={post.createdAt} />
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.post({id: post.id})}
                    title={'Show post ' + post.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPost({id: post.id})}
                    title={'Edit post ' + post.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete post ' + post.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(post.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminPosts
