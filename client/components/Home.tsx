import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { fetchAllProjectsThunk } from '../actions/projectsActions'
import projectModel from '../models/projectModel'
import ProjectCard from './ProjectCard'

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
      <h2>Hey there! Lets sort out your nook</h2>

      <section className="projectsGrid">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  )
}

export default Home
