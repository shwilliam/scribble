import Post from 'src/components/Post'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    post: post(id: $id) {
      id
      image
      label
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="spinner__wrapper fade-in">
    <span className="spinner" />
  </div>
)

export const Empty = () => (
  <p>
    No doodle found{' '}
    <span role="img" aria-label="sade face">
      🥺
    </span>
  </p>
)

export const Success = ({post}) => {
  return <Post post={post} />
}
