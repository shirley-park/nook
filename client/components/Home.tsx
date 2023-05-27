import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { fetchAllProjectsThunk } from '../actions/projectsActions'
import projectModel from '../models/projectModel'
import ProjectCard from './ProjectCard'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from './Authenticated'
import { AnimatePresence } from 'framer-motion'

function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectsThunk())
  }, [dispatch])

  const allProjects = useAppSelector(
    (state) => state.projectsState as projectModel[]
  )

  const { user } = useAuth0()

  return (
    <>
      {/* <IfAuthenticated>
        <h2>Welcome back {user?.name}! Lets sort out your nook</h2>
      </IfAuthenticated> */}

      <h2>Welcome back! Lets sort out your nook</h2>

      <section className="projectsGrid">
        <AnimatePresence>
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </section>
    </>
  )
}

export default Home
