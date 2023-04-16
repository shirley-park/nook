// Imports
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Nav from './Nav'
import Home from './Home'
import ProjectPage from './ProjectPage'
import AllElements from './AllElements'
// import AddProject from './AddProject'
import Overlay from './Overlay'
import AddProject from './AddProject'

// --------------------

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <div className="container loader">
        <section className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/elements" element={<AllElements />} />
            <Route path="/addProject" element={<AddProject />} />
          </Routes>
        </section>
      </div>

      <div className="App">
        <button onClick={toggleOverlay}>Open</button>

        <Overlay isOpen={isOpen} onClose={toggleOverlay}>
          <AddProject />
        </Overlay>
      </div>
    </>
  )
}

export default App
