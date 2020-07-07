import {Link, routes} from '@redwoodjs/router'
import TimeTag from 'src/components/TimeTag'

const PostsList = ({posts}) => {
  return (
    <div className="rw-segment">
      {posts.map(post => (
        <Link
          key={post.id}
          to={routes.post({id: post.id})}
          title={'Show post ' + post.id + ' detail'}
          className="rw-link undecorated"
        >
          <img src={post.image} aria-label="" />
          <TimeTag datetime={post.createdAt} />
        </Link>
      ))}
    </div>
  )
}

export default PostsList
