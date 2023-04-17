import type { ThunkAction } from '../store'

// import api function
import { deleteElementApi, fetchElementsApi } from '../apis/elementsApi'
import { addNewElementApi } from '../apis/elementsApi'

// import elementModel
import elementModel from '../models/elementModel'
// import projectModel from '../models/projectModel'

// --------------------

export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS'
export const ADD_ELEMENT = 'ADD_ELEMENT'
export const DELETE_ELEMENT = 'DELETE_ELEMENT'

export type Action =
  | { type: 'RECEIVE_ELEMENTS'; payload: elementModel[] }
  | { type: 'ADD_ELEMENT'; payload: elementModel }
  | { type: 'DELETE_ELEMENT'; payload: number }

// SIMPLE ACTIONS

function receiveAllElements(dbElements: elementModel[]): Action {
  return {
    type: 'RECEIVE_ELEMENTS',
    payload: dbElements,
  }
}

function addNewElementAction(newElement: elementModel): Action {
  return {
    type: 'ADD_ELEMENT',
    payload: newElement,
  }
}

function deleteElementAction(id: elementModel['id']): Action {
  return {
    type: 'DELETE_ELEMENT',
    payload: id,
  }
}

// THUNKS

// fetchAllElements
export function fetchAllElementsThunk(): ThunkAction {
  return (dispatch) => {
    return fetchElementsApi()
      .then((dbElements) => {
        dispatch(receiveAllElements(dbElements))
      })
      .catch((err) => err.message)
  }
}

// add new Element for project Thunk
export function addNewElementThunk(
  newElementFormInput: elementModel,
  projectId: number
): ThunkAction {
  return (dispatch) => {
    return addNewElementApi(newElementFormInput, projectId).then(
      (newElement) => {
        dispatch(addNewElementAction(newElement))
      }
    )
  }
}

// DELETE Element Thunk
export function deleteElementThunk(id: elementModel['id']): ThunkAction {
  return (dispatch) => {
    return (
      // delete Element Api
      deleteElementApi(id)
        // dispatch the delete action
        .then(() => {
          dispatch(deleteElementAction(id))
        })
        .catch((err) => {
          err.message
        })
    )
  }
}
