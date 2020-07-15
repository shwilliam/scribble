import AdminPosts from 'src/components/AdminPosts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      image
      label
      createdAt
    }
  }
`

export const beforeQuery = props => {
  return {variables: props, fetchPolicy: 'cache-and-network'}
}

export const Loading = () => (
  <div className="spinner__wrapper fade-in">
    <span className="spinner" />
  </div>
)

export const Empty = () => {
  return <div className="rw-text-center">{'No doodles yet. '}</div>
}

export const Success = ({posts}) => {
  return <AdminPosts posts={posts} />
}
