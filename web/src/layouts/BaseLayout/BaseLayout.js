import {Link, routes} from '@redwoodjs/router'

const BaseLayout = ({children}) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>scribble</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>about</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}

export default BaseLayout
