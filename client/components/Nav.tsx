// Imports

import { Link } from 'react-router-dom'
import Overlay from './Overlay'
import { useState } from 'react'
import AddProject from './AddProject'

import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

// --------------------

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOpen(!isOpen)
  }

  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    // console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    // console.log('sign in')
    loginWithRedirect()
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
          <IfAuthenticated>
            <button className="navbutton" onClick={handleSignOut}>
              sign out
            </button>
            {user && <p>Signed in as: {user?.nickname}</p>}
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button className="navbutton" onClick={handleSignIn}>
              sign in
            </button>
          </IfNotAuthenticated>
        </div>
      </nav>
    </>
  )
}

export default Nav
