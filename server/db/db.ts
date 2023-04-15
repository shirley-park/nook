import config from './knexfile'
import knex from 'knex'
import projectModel from '../../client/models/projectModel'
import elementModel from '../../client/models/elementModel'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

// ----PROJECTS

export function getAllProjects(db = connection): Promise<projectModel[]> {
  return db('projects').select()
}

export function getProjectById(
  projectid: number,
  db = connection
): Promise<projectModel> {
  return db('projects').where('projects.id', projectid).first()
}

// ---- ELEMENTS

export function getAllElements(db = connection): Promise<elementModel[]> {
  return db('elements').select()
}
