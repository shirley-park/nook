// Imports

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'

// import fetchAllThunk from projects.actions
import { fetchAllProjectsThunk } from '../actions/projectsActions'

// project model
import projectModel from '../models/projectModel'

// Project card component
import ProjectCard from './ProjectCard'

// --------------------

function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectsThunk())
  }, [dispatch])

  const allProjects = useAppSelector(
    (state) => state.projectsState as projectModel[]
  )

  return (
    <>
      <h2>Hi [user], this is fine! Lets sort out your nook</h2>

      <section className="projectsGrid">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  )
}

export default Home
