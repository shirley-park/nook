import type { ThunkAction } from '../store'

// import api function
import { fetchElementsApi } from '../apis/elementsApi'

// import elementModel
import elementModel from '../models/elementModel'

// --------------------

export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS'

export type Action = { type: 'RECEIVE_ELEMENTS'; payload: elementModel[] }

// SIMPLE ACTIONS

function receiveAllElements(dbElements: elementModel[]): Action {
  return {
    type: 'RECEIVE_ELEMENTS',
    payload: dbElements,
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
