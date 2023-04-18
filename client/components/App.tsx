// Imports
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import ProjectPage from './ProjectPage'
import AllElements from './AllElements'
import AddProject from './AddProject'

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
      <Footer />
    </>
  )
}

export default App
