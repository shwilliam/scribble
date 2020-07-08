import AdminPosts from 'src/components/AdminPosts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      image
      createdAt
    }
  }
`

export const beforeQuery = props => {
  return {variables: props, fetchPolicy: 'cache-and-network'}
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No doodles yet. '}</div>
}

export const Success = ({posts}) => {
  return <AdminPosts posts={posts} />
}
