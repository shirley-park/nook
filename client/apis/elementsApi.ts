import request from 'superagent'
import elementModel from '../models/elementModel'

const url = '/api/v1/elements/'

export function fetchElementsApi(): Promise<elementModel[]> {
  return request.get(url).then((res) => {
    return res.body
  })
}

export function addNewElementApi(
  newElement: elementModel,
  id: number
): Promise<elementModel> {
  return request
    .post(url + id)
    .send(newElement)
    .then((res) => {
      return res.body
    })
}

export function deleteElementApi(id: elementModel['id']) {
  return request.delete(url + id).then((res) => res.body)
}

export function updateElementApi(id: number, updatedElement: elementModel) {
  return request
    .patch(url + id)
    .send(updatedElement)
    .then((res) => res.body)
}
