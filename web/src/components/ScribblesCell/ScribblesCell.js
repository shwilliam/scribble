export const QUERY = gql`
  query {
    posts {
      id
      image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}) => <div>Error: {error.message}</div>

export const Success = ({posts}) => {
  return JSON.stringify(posts)
}
