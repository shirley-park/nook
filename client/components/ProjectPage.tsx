// import Elements from './AllElements'
// import { useAppSelector } from '../hooks/redux'
// import projectModel from '../models/projectModel'

import {
  // useParams,
  useLocation,
} from 'react-router-dom'

import FilteredElements from './FilteredElements'
import FadeInAnimation from './FadeInAnimation'

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

  // console.log(state)

  const projectImageArr = state.project.image.split('|')
  // console.log(projectImageArr)

  return (
    <>
      <FadeInAnimation wrapperElement="div">
        <div>
          <h3>{state.project.space}</h3>
          <p>{state.project.description}</p>
          <div className="projectInspGrid">
            {projectImageArr.map((imageUrl: string, i: number) => (
              <img src={imageUrl} alt={state.project.space} key={i} />
            ))}
          </div>
        </div>
      </FadeInAnimation>

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
