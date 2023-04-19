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

router.post('/:id', (req, res) => {
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

router.delete('/elements/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteElementDb(id)
    .then(() => res.status(200).send('deleted!'))
    .catch((err) => err.message)
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const amendments = req.body

  console.log(amendments)
  db.updateElementDb(id, amendments)
    .then((updatedElement) => res.json(updatedElement))
    .catch((err) => err.message)
})

export default router
