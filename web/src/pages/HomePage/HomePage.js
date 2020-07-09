import BaseLayout from 'src/layouts/BaseLayout'

import MonsterArtistImage from './monster_artist.svg'

const HomePage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">doodle + link</h1>
        <aside className="subtitle push-large">| ˈduːd(ə)lɪŋk |</aside>
      </header>

      <MonsterArtistImage />
    </BaseLayout>
  )
}

export default HomePage
