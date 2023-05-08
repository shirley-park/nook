// Imports

import { Link } from 'react-router-dom'
import Overlay from './Overlay'
import { useState } from 'react'
import AddProject from './AddProject'

// --------------------

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOpen(!isOpen)
  }
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
            <button className="navbutton">my elements</button>
          </Link>
          {/* <Link to="/addProject" className="addProjectNav link"> */}

          <div className="App">
            <button className="navbutton" onClick={toggleOverlay}>
              add project
            </button>

            <Overlay isOpen={isOpen} onClose={toggleOverlay}>
              <AddProject />
            </Overlay>
          </div>
          {/* </Link> */}
        </div>
      </nav>
    </>
  )
}

export default Nav
