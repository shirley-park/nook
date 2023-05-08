// Imports

import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'
import elementsReducer from './elementsReducer'

export default combineReducers({
  projectsState: projectsReducer,
  elementsState: elementsReducer,
})
