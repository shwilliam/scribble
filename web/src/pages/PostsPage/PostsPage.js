import PostsCell from 'src/components/PostsCell'
import BaseLayout from 'src/layouts/BaseLayout'

const PostsPage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">recent doodles</h1>
        <p className="subtitle push">browse recently created doodles</p>
      </header>

      <hr />

      <PostsCell />
    </BaseLayout>
  )
}

export default PostsPage
