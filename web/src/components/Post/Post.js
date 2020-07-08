import TimeTag from 'src/components/TimeTag'

const Post = ({post}) => {
  return (
    <article className="rw-segment">
      <img src={post.image} alt="TODO" />

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
