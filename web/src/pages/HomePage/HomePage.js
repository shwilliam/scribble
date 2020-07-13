import BaseLayout from 'src/layouts/BaseLayout'
import {Link, routes} from '@redwoodjs/router'

import MonsterArtistImage from './monster_artist.svg'

const HomePage = () => {
  return (
    <BaseLayout>
      <header className="align-center">
        <h1 className="title bold">doodle + link</h1>
        <aside className="subtitle push">| ˈduːd(ə)lɪŋk |</aside>

        <div className="align-center hero-action__wrapper">
          <Link
            to={routes.newPost()}
            className="rw-button rw-button-blue rw-button-hero"
          >
            Draw something
            <svg
              className="hero-action__arrow"
              width="42"
              height="61"
              viewBox="0 0 42 61"
              fill="none"
              aria-hidden
            >
              <path
                d="M27.147 3.228C7.794 18.443 6.296 44.021 21.7 56.675m0 0l-.081-6.964m.08 6.964l-6.2.898"
                stroke="#6c63ff"
                strokeWidth="2"
              ></path>
            </svg>
          </Link>
        </div>
      </header>

      <MonsterArtistImage />
    </BaseLayout>
  )
}

export default HomePage
