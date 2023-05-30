import type { ThunkAction } from '../store'
import {
  addNewProjectApi,
  deleteProjectApi,
  fetchProjectsApi,
} from '../apis/projectsApi'
import projectModel from '../models/projectModel'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

export type Action =
  | { type: 'RECEIVE_PROJECTS'; payload: projectModel[] }
  | { type: 'ADD_PROJECT'; payload: projectModel }
  | { type: 'DELETE_PROJECT'; payload: number }

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

function deleteProject(projectId: number): Action {
  return {
    type: 'DELETE_PROJECT',
    payload: projectId,
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

// delete project thunk
export function deleteProjectThunk(
  projectId: projectModel['id']
  // token: string
): ThunkAction {
  return (dispatch) => {
    return deleteProjectApi(
      projectId
      // token
    )
      .then(() => dispatch(deleteProject(projectId)))
      .catch((err) => err.message)
  }
}
