import TimeTag from 'src/components/TimeTag'

const Post = ({post}) => {
  return (
    <article className="rw-segment">
      <header>
        <TimeTag datetime={post.createdAt} />
      </header>

      <img src={post.image} aria-label="TODO" />

      <footer>
        <a
          href={post.image}
          download={`doodle_${post.id}.png`}
          className="rw-button rw-button-blue"
        >
          Download
        </a>
      </footer>
    </article>
  )
}

export default Post
