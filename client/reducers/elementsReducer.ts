import {
  Action,
  RECEIVE_ELEMENTS,
  ADD_ELEMENT,
} from '../actions/elementsActions'

import elementModel from '../models/elementModel'

// --------------------

const initialState = [] as elementModel[]

function elementsReducer(
  state = initialState,
  action: Action
): elementModel[] | null {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ELEMENTS:
      return payload
    case ADD_ELEMENT:
      return [payload, ...state]
    default:
      return state
  }
}

export default elementsReducer
