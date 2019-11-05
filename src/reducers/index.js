import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pollsReducer from './polls-reducer'
import authedUserReducer from './authedUser-reducer'

export default combineReducers ({
  authedUserReducer,
  usersReducer,
  pollsReducer
})
