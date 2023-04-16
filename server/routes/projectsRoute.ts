import express from 'express'
import * as db from '../db/db'

const router = express.Router()
router.use(express.json())

// --------------------

// get all projects
router.get('/', (req, res) => {
  db.getAllProjects()
    .then((projectArr) => {
      res.json(projectArr)
    })
    .catch((err) => err.message)
})

router.post('/', (req, res) => {
  const newProject = req.body
  db.addNewProject(newProject)
    .then((newProjectObj) => {
      res.json(newProjectObj)
    })
    .catch((err) => err.message)
})

// router.get('/project/:id', (req, res) => {
//   const projectId = Number(req.params.id)

//   db.getProjectById(projectId)
//     .then((project) => {
//       res.json(project)
//     })
//     .catch((err) => err.message)
// })

// router.get('/project/:id', (req, res) => {
//   const projectId = Number(req.params.id)

//   db.getElementsByProjectId(projectId)
//     .then((elements) => {
//       return res.json(elements)
//     })
//     .catch((err) => err.message)
// })

export default router
