import {Link, routes} from '@redwoodjs/router'
import {Flash} from '@redwoodjs/web'
import ErrorBoundary from 'src/components/ErrorBoundary'

const BaseLayout = ({children}) => {
  return (
    <ErrorBoundary>
      <div className="rw-scaffold">
        <Flash timeout={1000} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.home()} className="rw-link">
              dood.link
            </Link>
          </h1>
          <nav>
            <ul className="nav">
              <li className="nav__item">
                <Link to={routes.about()} className="rw-link undecorated">
                  about
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to={routes.newPost()}
                  className="rw-button rw-button-green"
                >
                  <div className="rw-button-icon">+</div> New doodle
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="rw-main">{children}</main>
      </div>
    </ErrorBoundary>
  )
}

export default BaseLayout
