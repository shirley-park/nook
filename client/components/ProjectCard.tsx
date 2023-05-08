import { Link } from 'react-router-dom'
import projectModel from '../models/projectModel'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  deleteProjectThunk,
  fetchAllProjectsThunk,
} from '../actions/projectsActions'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function ProjectCard({ project }: { project: projectModel }) {
  const { getAccessTokenSilently } = useAuth0()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectsThunk())
  }, [dispatch])

  const projectImageArr = project.image.split('|')

  const handleDelete = async (projectId: projectModel['id']) => {
    try {
      const token = await getAccessTokenSilently()

      const deleteProject = await dispatch(deleteProjectThunk(projectId, token))

      return deleteProject
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
  }

  return (
    <div className="projectCard">
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
      <div className="projectCardH3Delete">
        <Link
          to={`/project/${project.id}`}
          state={{ project }}
          className="link"
        >
          <h3>{project.space}</h3>
        </Link>
        <button
          className="iconButton"
          onClick={() => {
            handleDelete(project.id)
          }}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <Link to={`/project/${project.id}`} state={{ project }} className="link">
        <p>{project.description}</p>
      </Link>
      <hr />
    </div>
  )
}

export default ProjectCard
