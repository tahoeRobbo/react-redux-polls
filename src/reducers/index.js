import { combineReducers } from 'redux'
import users from './users-reducer'
import polls from './polls-reducer'
import authedUser from './authedUser-reducer'

export default combineReducers ({
  authedUser,
  users,
  polls
})
