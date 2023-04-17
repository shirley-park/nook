// import Elements from './AllElements'
// import { useAppSelector } from '../hooks/redux'
// import projectModel from '../models/projectModel'

import {
  // useParams,
  useLocation,
} from 'react-router-dom'

import FilteredElements from './FilteredElements'

// --------------------

function ProjectPage() {
  // const params = useParams()
  // // {id: 1}

  // const projectId = Number(params.id)

  // const projectsState = useAppSelector(
  //   (state) => state.projectsState as projectModel[]
  // )

  // const filteredProj = projectsState.filter(
  //   (project) => project.id === projectId
  // )

  // const theProject = filteredProj[0]

  // Shrena Added
  const location = useLocation()
  const { state } = location

  console.log(state)

  return (
    <>
      {/* Shrena Added */}
      <h3>{state.project.space}</h3>
      <p>{state.project.description}</p>
      <div className="projectInspGrid">
        <img src={state.project.image} alt={state.project.description} />
      </div>
      {/* Shrena Added */}

      {/* 
      <h3>{theProject?.space}</h3>
      <p>{theProject?.description}</p>
      <div className="projectInspGrid">
        <img src={theProject?.image} alt={theProject?.description} />
      </div> */}

      <hr />
      <div>
        <FilteredElements />
      </div>
    </>
  )
}

export default ProjectPage
