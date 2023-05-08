// Imports
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import ProjectPage from './ProjectPage'
import AllElements from './AllElements'
import AddProject from './AddProject'
import FadeTest from './FadeTest'
// import PageTransition from './PageTransition'
// import { motion } from 'framer-motion'

// react transition group
// import { CSSTransition } from 'react-transition-group'
import FadeInAnimation from './FadeInAnimation'
// --------------------

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      {/* <motion.div
        initial={{ opacity: 0.2, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      > */}
      <FadeInAnimation wrapperElement="div">
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
        {/* </motion.div> */}
      </FadeInAnimation>
      <Footer />
      {/* <FadeTest /> */}
      {/* <PageTransition /> */}
    </>
  )
}

export default App
