import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import ProjectPage from './ProjectPage'
import AllElements from './AllElements'
import AddProjectForm from './AddProjectForm'
import FadeInAnimation from './FadeInAnimation'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <FadeInAnimation wrapperElement="div">
        <div className="container loader">
          <section className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="/elements" element={<AllElements />} />
              <Route path="/addProject" element={<AddProjectForm />} />
            </Routes>
          </section>
        </div>
      </FadeInAnimation>
      <Footer />
    </>
  )
}

export default App
