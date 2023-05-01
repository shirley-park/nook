import config from './knexfile'
import knex from 'knex'
import projectModel from '../../client/models/projectModel'
import elementModel from '../../client/models/elementModel'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

// ----PROJECTS

export function getAllProjects(db = connection): Promise<projectModel[]> {
  return db('projects').select().orderBy('id', 'desc')
}

export function addNewProject(
  newProject: projectModel,
  db = connection
): Promise<projectModel> {
  return db('projects')
    .insert(newProject)
    .returning(['id', 'space', 'description', 'image'])
    .then((newProjectObjArr) => newProjectObjArr[0])
}

export function deleteProject(projectId: number, db = connection) {
  return db('projects').where('id', projectId).delete()
}

// ---- ELEMENTS

export function getAllElements(db = connection): Promise<elementModel[]> {
  return db('elements').select().orderBy('id', 'desc')
}

export function addNewElementDb(
  newElement: elementModel,
  projectId: number,
  db = connection
): Promise<elementModel> {
  return db('elements')
    .insert(newElement)
    .returning([
      'id',
      'project_id',
      'item_name',
      'make',
      'description',
      'imageUrl',
      'element_tag',
    ])
    .then((newElementObjArr) => newElementObjArr[0])
}

export function deleteElementDb(elementId: number, db = connection) {
  return db('elements').where('id', elementId).delete()
}

export function updateElementDb(
  elementId: number,
  updatedElement: elementModel,
  db = connection
) {
  return db('elements').where('id', elementId).update(updatedElement)
}
