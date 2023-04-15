import Elements from './AllElements'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import projectModel from '../models/projectModel'

import { useParams } from 'react-router-dom'

import { useEffect } from 'react'
import { fetchAllProjectsThunk } from '../actions/projectsActions'

// --------------------

function ProjectPage() {
  const { projectId } = useParams()
  console.log({ projectId })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectsThunk())
  }, [dispatch])

  const allProjects = useAppSelector(
    (state) => state.projectsState as projectModel[]
  )

  console.log(allProjects)
  return (
    <>
      {/* <h3>{project.space}</h3>
      <p>{project.description}</p> */}

      <h3>Hello! This is the project page!</h3>
      <div>
        <Elements />
      </div>
    </>
  )
}

export default ProjectPage
