import express from 'express'
import * as db from '../db/db'

const router = express.Router()
router.use(express.json())

// --------------------

router.get('/elements', (req, res) => {
  db.getAllElements()
    .then((elements) => {
      res.json(elements)
    })
    .catch((err) => err.message)
})

router.post('/elements/:id', (req, res) => {
  const { id, item_name, make, description, imageUrl, element_tag } = req.body

  const projectId = Number(req.params.id)

  const newElement = {
    id: id,
    project_id: projectId,
    item_name: item_name,
    make: make,
    description: description,
    imageUrl: imageUrl,
    element_tag: element_tag,
  }

  db.addNewElementDb(newElement, projectId)
    .then((newElement) => {
      res.json(newElement)
    })
    .catch((err) => err.message)
})

export default router
