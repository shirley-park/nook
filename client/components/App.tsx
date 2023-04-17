// Imports
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Nav from './Nav'
import Home from './Home'
import ProjectPage from './ProjectPage'
import AllElements from './AllElements'
import AddProject from './AddProject'
// import Overlay from './Overlay'

// --------------------

function App() {
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
    </>
  )
}

export default App
