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
// import { useAuth0 } from '@auth0/auth0-react'
// import { IfAuthenticated } from './Authenticated'
import { MdOutlineDelete } from 'react-icons/md'
import { motion } from 'framer-motion'

function ProjectCard({ project }: { project: projectModel }) {
  // const { getAccessTokenSilently } = useAuth0()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectsThunk())
  }, [dispatch])

  const projectImageArr = project.image.split(',')

  const handleDelete = async (projectId: projectModel['id']) => {
    try {
      // const token = await getAccessTokenSilently()

      const deleteProject = await dispatch(
        deleteProjectThunk(
          projectId
          // token
        )
      )

      return deleteProject
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
  }

  return (
    <motion.div
      key={project.id}
      className="projectCard"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duation: 0.5 }}
    >
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
        {/* <IfAuthenticated> */}
        <MdOutlineDelete
          className="iconButton"
          onClick={() => {
            handleDelete(project.id)
          }}
        />
        {/* </IfAuthenticated> */}
      </div>
      <Link to={`/project/${project.id}`} state={{ project }} className="link">
        <p>{project.description}</p>
      </Link>
      <hr />
    </motion.div>
  )
}

export default ProjectCard
