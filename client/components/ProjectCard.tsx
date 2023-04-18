// Imports
import { Link } from 'react-router-dom'

import projectModel from '../models/projectModel'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// --------------------

function ProjectCard({ project }: { project: projectModel }) {
  console.log(project)

  const projectImageArr = project.image.split(',')
  console.log(projectImageArr)

  return (
    <div className="projectCard">
      {/* Shrena added state={{ project }} */}

      <div className="carouselBox">
        <Carousel
          useKeyboardArrows={true}
          showThumbs={false}
          showStatus={false}
        >
          {projectImageArr.map((imageUrl: string, i: number) => (
            <img src={imageUrl} alt={`${project.space} project`} key={i} />
          ))}
        </Carousel>
      </div>
      {/* <img src={projectImageArr[0]} alt={`${project.space} project`} /> */}
      <Link to={`/project/${project.id}`} state={{ project }} className="link">
        <h3>{project.space}</h3>
        <p>{project.description}</p>
      </Link>
      <hr />
    </div>
  )
}

export default ProjectCard
