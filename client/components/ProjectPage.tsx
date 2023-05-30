import { useLocation } from 'react-router-dom'
import FilteredElements from './FilteredElements'
import { motion } from 'framer-motion'

function ProjectPage() {
  const location = useLocation()
  const { state } = location

  const projectImageArr = state.project.image.split(',')

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duation: 0.5 }}
      >
        <h3>{state.project.space}</h3>
        <p>{state.project.description}</p>
        <div className="projectInspGrid">
          {projectImageArr.map((imageUrl: string, i: number) => (
            <img src={imageUrl} alt={state.project.space} key={i} />
          ))}
        </div>
      </motion.div>
      <hr />
      <div>
        <FilteredElements />
      </div>
    </>
  )
}

export default ProjectPage
