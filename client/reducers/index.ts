// Imports

import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'
import elementsReducer from './elementsReducer'

// import stuff from './stuff'

export default combineReducers({
  projectsState: projectsReducer,
  elementsState: elementsReducer,
})
