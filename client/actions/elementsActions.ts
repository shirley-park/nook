import type { ThunkAction } from '../store'
import {
  fetchElementsApi,
  deleteElementApi,
  updateElementApi,
} from '../apis/elementsApi'
import { addNewElementApi } from '../apis/elementsApi'
import elementModel from '../models/elementModel'

export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS'
export const ADD_ELEMENT = 'ADD_ELEMENT'
export const DELETE_ELEMENT = 'DELETE_ELEMENT'
export const UPDATE_ELEMENT = 'UPDATE_ELEMENT'

export type Action =
  | { type: 'RECEIVE_ELEMENTS'; payload: elementModel[] }
  | { type: 'ADD_ELEMENT'; payload: elementModel }
  | { type: 'DELETE_ELEMENT'; payload: number }
  | { type: 'UPDATE_ELEMENT'; payload: elementModel }

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

function updateElementAction(amendedElement: elementModel) {
  return {
    type: 'UPDATE_ELEMENT',
    payload: amendedElement,
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

// UPDATE Item Thunk
export function updateElementThunk(
  id: number,
  amendedElement: elementModel
): ThunkAction {
  return (dispatch) => {
    // dispatch the updateItem action
    dispatch(updateElementAction(amendedElement))

    // updateItem Api function
    return updateElementApi(id, amendedElement)
      .then(() => {
        dispatch(fetchAllElementsThunk())
      })
      .catch((err: Error) => {
        err.message
      })
  }
}
