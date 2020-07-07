import TimeTag from 'src/components/TimeTag'

const Post = ({post}) => {
  return (
    <article className="rw-segment">
      <img src={post.image} aria-label="TODO" />
      <TimeTag datetime={post.createdAt} />
    </article>
  )
}

export default Post
