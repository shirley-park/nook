import request from 'superagent'
import projectModel from '../models/projectModel'

const url = '/api/v1/projects/'

export function fetchProjectsApi(): Promise<projectModel[]> {
  return request.get(url).then((res) => {
    return res.body
  })
}

export function addNewProjectApi(
  newProject: projectModel
): Promise<projectModel> {
  return request
    .post(url)
    .send(newProject)
    .then((res) => {
      return res.body
    })
}

export function deleteProjectApi(
  projectId: number
  // token: string
): Promise<projectModel> {
  return (
    request
      .delete(url + projectId)
      // .set('Authorization', `Bearer ${token}`)
      .then((res) => res.body)
  )
}
