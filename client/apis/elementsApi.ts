import request from 'superagent'

import elementModel from '../models/elementModel'
// import projectModel from '../models/projectModel'

// --------------------

const url = '/api/v1/nook/elements/'

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
    .post('/api/v1/nook/' + id)
    .send(newElement)
    .then((res) => {
      return res.body
    })
}

export function deleteElementApi(id: elementModel['id']) {
  return request.delete('/api/v1/nook/' + id).then((res) => res.body)
}

export function updateElementApi(id: number, updatedElement: elementModel) {
  return request
    .patch('/api/v1/nook/' + id)
    .send(updatedElement)
    .then((res) => res.body)
}
