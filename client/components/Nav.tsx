import { Link } from 'react-router-dom'
import AddProjectOverlay from './AddProjectOverlay'
import { useState } from 'react'
import AddProjectForm from './AddProjectForm'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOpen(!isOpen)
  }

  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
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
          <Link to="/elements" className="">
            <button className="navbutton">my elements</button>
          </Link>
          {/* <IfAuthenticated> */}
          <button className="navbutton" onClick={toggleOverlay}>
            add project
          </button>

          <AddProjectOverlay isOpen={isOpen} onClose={toggleOverlay}>
            <AddProjectForm />
          </AddProjectOverlay>

          {/* <button className="navbutton" onClick={handleSignOut}>
            sign out
          </button> */}
          {/* </IfAuthenticated> */}
          {/* <IfNotAuthenticated>
            <button className="navbutton" onClick={handleSignIn}>
              sign in
            </button>
          </IfNotAuthenticated> */}
        </div>
      </nav>
    </>
  )
}

export default Nav
