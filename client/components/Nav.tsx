// Imports

import { Link } from 'react-router-dom'

// --------------------

function Nav() {
  return (
    <>
      <nav>
        <h1>
          <Link to="/" className="link">
            nook
          </Link>
        </h1>

        <p>add project</p>
      </nav>
    </>
  )
}

export default Nav
