import { useLocation } from 'react-router-dom'
import FilteredElements from './FilteredElements'
import FadeInAnimation from './FadeInAnimation'

function ProjectPage() {
  const location = useLocation()
  const { state } = location

  const projectImageArr = state.project.image.split('|')

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
      <hr />
      <div>
        <FilteredElements />
      </div>
    </>
  )
}

export default ProjectPage
