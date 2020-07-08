import NewPost from 'src/components/NewPost'
import BaseLayout from 'src/layouts/BaseLayout'

const NewPostPage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">create a dood.link</h1>
      </header>

      <hr />

      <section className="align-center">
        <NewPost />
      </section>
    </BaseLayout>
  )
}

export default NewPostPage
