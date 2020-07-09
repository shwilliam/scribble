import NewPost from 'src/components/NewPost'
import BaseLayout from 'src/layouts/BaseLayout'

const NewPostPage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">create a doodle</h1>
        <p className="subtitle push">draw anything and get a shareable URL</p>
      </header>

      <hr />

      <section>
        <NewPost />
      </section>
    </BaseLayout>
  )
}

export default NewPostPage
