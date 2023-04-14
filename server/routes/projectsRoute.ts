import express from 'express'
import * as db from '../db/db'

const router = express.Router()
router.use(express.json())

// --------------------

router.get('/', (req, res) => {
  db.getAllProjects()
    .then((projectArr) => {
      res.json(projectArr)
    })
    .catch((err) => err.message)
})

export default router
