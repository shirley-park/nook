// Imports
import { Link } from 'react-router-dom'

import projectModel from '../models/projectModel'

// --------------------

function ProjectCard({ project }: { project: projectModel }) {
  console.log(project)

  const projectImageArr = project.image.split(',')
  console.log(projectImageArr)
  return (
    <div className="projectCard">
      {/* Shrena added state={{ project }} */}
      <Link to={`/project/${project.id}`} state={{ project }} className="link">
        {/* Shrena added */}
        {/* {projectImageArr.map((imageUrl: string, i: number) => (
          <img src={imageUrl} alt={`${project.space} project`} key={i} />
        ))} */}
        <img src={projectImageArr[0]} alt={`${project.space} project`} />
        <h3>{project.space}</h3>
        <p>{project.description}</p>
      </Link>
      <hr />
    </div>
  )
}

export default ProjectCard
