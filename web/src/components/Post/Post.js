import TimeTag from 'src/components/TimeTag'

const Post = ({post}) => {
  return (
    <article className="rw-segment doodle__wrapper fade-in">
      <img className="doodle bordered" src={post.image} alt={post.label} />

      <footer className="flex -space-between">
        <TimeTag datetime={post.createdAt} />
        <a
          href={post.image}
          download={`doodle_${post.id}.png`}
          className="rw-button rw-button-green"
        >
          Download
        </a>
      </footer>
    </article>
  )
}

export default Post
