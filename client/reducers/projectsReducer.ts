import {
  Action,
  RECEIVE_PROJECTS,
  ADD_PROJECT,
} from '../actions/projectsActions'

import projectModel from '../models/projectModel'

// --------------------

const initialState = [] as projectModel[]

function projectsReducer(
  state = initialState,
  action: Action
): projectModel[] | null {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_PROJECTS:
      return payload
    case ADD_PROJECT:
      console.log(payload)
      return [payload, ...state]
    default:
      return state
  }
}

export default projectsReducer
