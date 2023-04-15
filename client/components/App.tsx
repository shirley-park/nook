// Imports
import { Routes, Route, Link } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import ProjectPage from './Projectpage'
import Elements from './Elements'

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
            <Route path="/project/:id" element={<Elements />} />
          </Routes>
        </section>
      </div>
    </>
  )
}

export default App
