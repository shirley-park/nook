import type { ThunkAction } from '../store'

// import api function
import { fetchProjectsApi } from '../apis/projectsApi'

// import model
import projectModel from '../models/projectModel'

// --------------------

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

export type Action = { type: 'RECEIVE_PROJECTS'; payload: projectModel[] }

// SIMPLE ACTIONS

function receiveAllProjects(dbData: projectModel[]): Action {
  return {
    type: 'RECEIVE_PROJECTS',
    payload: dbData,
  }
}

// THUNKS

// fetch all projects thunk
export function fetchAllProjectsThunk(): ThunkAction {
  return (dispatch) => {
    return fetchProjectsApi()
      .then((dbData) => {
        dispatch(receiveAllProjects(dbData))
      })
      .catch((err) => err.message)
  }
}
