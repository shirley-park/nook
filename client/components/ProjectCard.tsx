// Imports
import { Link } from 'react-router-dom'

import projectModel from '../models/projectModel'

// --------------------

function ProjectCard({ project }: { project: projectModel }) {
  return (
    <div className="projectCard">
      {/* Shrena added state={{ project }} */}
      <Link to={`/project/${project.id}`} state={{ project }} className="link">
        {/* Shrena added */}

        <img src={project.image} alt={`${project.space} project`} />
        <h3>{project.space}</h3>
        <p>{project.description}</p>
      </Link>
      <hr />
    </div>
  )
}

export default ProjectCard
