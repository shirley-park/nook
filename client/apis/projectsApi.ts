import request from 'superagent'

import projectModel from '../models/projectModel'

// --------------------

const url = '/api/v1/nook/'

export function fetchProjectsApi(): Promise<projectModel[]> {
  return request.get(url).then((res) => {
    return res.body
  })
}

// export function fetchProjectByIdApi():
