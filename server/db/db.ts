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

// export function addNewProject(
//   newProject: projectModel,
//   db = connection
// ): Promise<projectModel> {
//   return knex
//     .transaction(function (t) {
//       return db('projects')
//         .transacting(t)
//         .insert(newProject)
//         .then(function (response) {
//           return db('spaces').transacting(t).insert({})
//         })
//         .then(t.commit)
//         .catch(t.rollback)
//     })
//     .then(function () {
//       // transaction suceeded, data written
//     })
//     .catch(function () {
//       // transaction failed, data rolled back
//     })
// }

// ---- SPACES

// export function getElementsByProjectId(
//   projectId: number,
//   db = connection
// ): Promise<elementModel[]> {
//   return db('elements')
//     .select()
//     .where('projects_id', projectId)
//     .join('spaces', 'projects_id', 'project_id')
// }

// ---- ELEMENTS

export function getAllElements(db = connection): Promise<elementModel[]> {
  return db('elements').select()
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
