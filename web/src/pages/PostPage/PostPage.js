import PostCell from 'src/components/PostCell'
import BaseLayout from 'src/layouts/BaseLayout'

const PostPage = ({id}) => {
  return (
    <BaseLayout>
      <PostCell id={id} />
    </BaseLayout>
  )
}

export default PostPage
