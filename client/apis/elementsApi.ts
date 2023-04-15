import request from 'superagent'

import elementModel from '../models/elementModel'

// --------------------

const url = '/api/v1/nook/elements/'

export function fetchElementsApi(): Promise<elementModel[]> {
  return request.get(url).then((res) => {
    return res.body
  })
}
