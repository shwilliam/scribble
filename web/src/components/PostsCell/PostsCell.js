import {Link, routes} from '@redwoodjs/router'
import Posts from 'src/components/Posts'

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
  return (
    <div className="rw-text-center fade-in">
      {'No doodles yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create the first one!'}
      </Link>
    </div>
  )
}

export const Success = ({posts}) => {
  return <Posts posts={posts} />
}
