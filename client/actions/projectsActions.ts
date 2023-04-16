import type { ThunkAction } from '../store'

// import api function
import { addNewProjectApi, fetchProjectsApi } from '../apis/projectsApi'

// import model
import projectModel from '../models/projectModel'

// --------------------

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'

export type Action =
  | { type: 'RECEIVE_PROJECTS'; payload: projectModel[] }
  | { type: 'ADD_PROJECT'; payload: projectModel }

// SIMPLE ACTIONS

function receiveAllProjects(dbData: projectModel[]): Action {
  return {
    type: 'RECEIVE_PROJECTS',
    payload: dbData,
  }
}

function addNewProject(newProject: projectModel): Action {
  return {
    type: 'ADD_PROJECT',
    payload: newProject,
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

// add new project thunk
export function addNewProjectThunk(formInput: projectModel): ThunkAction {
  return (dispatch) => {
    return addNewProjectApi(formInput)
      .then((newProject) => {
        dispatch(addNewProject(newProject))
      })
      .catch((err) => err.message)
  }
}
