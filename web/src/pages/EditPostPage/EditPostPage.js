import EditPostCell from 'src/components/EditPostCell'
import BaseLayout from 'src/layouts/BaseLayout'

const EditPostPage = ({id}) => {
  return (
    <BaseLayout>
      <EditPostCell id={id} />
    </BaseLayout>
  )
}

export default EditPostPage
