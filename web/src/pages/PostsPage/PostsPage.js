import PostsCell from 'src/components/PostsCell'
import BaseLayout from 'src/layouts/BaseLayout'

const PostsPage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">recent posts</h1>
      </header>

      <hr />

      <PostsCell />
    </BaseLayout>
  )
}

export default PostsPage
