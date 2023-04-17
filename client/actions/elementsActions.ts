import type { ThunkAction } from '../store'

// import api function
import { fetchElementsApi } from '../apis/elementsApi'
import { addNewElementApi } from '../apis/elementsApi'

// import elementModel
import elementModel from '../models/elementModel'

// --------------------

export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS'
export const ADD_ELEMENT = 'ADD_ELEMENT'

export type Action =
  | { type: 'RECEIVE_ELEMENTS'; payload: elementModel[] }
  | { type: 'ADD_ELEMENT'; payload: elementModel }

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
  newElementFormInput: elementModel
): ThunkAction {
  return (dispatch) => {
    return addNewElementApi(newElementFormInput).then((newElement) => {
      dispatch(addNewElementAction(newElement))
    })
  }
}
