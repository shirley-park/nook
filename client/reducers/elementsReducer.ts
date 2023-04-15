import { Action, RECEIVE_ELEMENTS } from '../actions/elementsActions'

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
    default:
      return state
  }
}

export default elementsReducer
