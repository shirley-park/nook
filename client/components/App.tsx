// Imports
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import ProjectPage from './ProjectPage'
import AllElements from './AllElements'

// --------------------

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <div className="container">
        <section className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/elements" element={<AllElements />} />
          </Routes>
        </section>
      </div>
    </>
  )
}

export default App
