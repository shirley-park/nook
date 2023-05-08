import express from 'express'
import * as db from '../db/db'

const router = express.Router()
router.use(express.json())

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

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteProject(id)
    .then(() => res.status(200).send('project deleted!'))
    .catch((err) => err.message)
})

export default router
