import {Link, routes} from '@redwoodjs/router'
import {Flash} from '@redwoodjs/web'
import ErrorBoundary from 'src/components/ErrorBoundary'

const BaseLayout = ({children}) => {
  return (
    <ErrorBoundary>
      <div className="rw-scaffold">
        <Flash timeout={4000} />
        <header className="rw-header">
          <div className="rw-header-content">
            <Link
              to={routes.home()}
              className="rw-heading rw-heading-primary rw-link undecorated"
            >
              <span role="img" aria-label="" className="push-small">
                🖼
              </span>
              <span className="hide-mobile">dood.link</span>
            </Link>
            <nav className="flex">
              <Link
                to={routes.posts()}
                className="rw-heading rw-link push flush--top flush--bottom"
              >
                recent
              </Link>
              <Link to={routes.newPost()} className="rw-button rw-button-blue">
                <div className="rw-button-icon">+</div> New doodle
              </Link>
            </nav>
          </div>
        </header>

        <main className="rw-main fade-in">{children}</main>
      </div>
    </ErrorBoundary>
  )
}

export default BaseLayout
