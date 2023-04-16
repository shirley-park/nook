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
        <div className="navItems_right">
          <Link to="/elements" className="elements link">
            <p className="navlink">my elements</p>
          </Link>
          <Link to="/addProject" className="addProjectNav link">
            <p className="navlink">add project</p>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
