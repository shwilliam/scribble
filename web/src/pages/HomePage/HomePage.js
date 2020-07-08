import PostsCell from 'src/components/PostsCell'
import BaseLayout from 'src/layouts/BaseLayout'

const HomePage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">doodle + link</h1>
        <aside className="subtitle push">| ˈduːd(ə)lɪŋk |</aside>
      </header>

      <hr />

      <PostsCell />
    </BaseLayout>
  )
}

export default HomePage
