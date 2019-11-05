import { SET_AUTHED_USER } from '../constants'

export default function authedUserReducer (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return state = action.id
    default:
      return state
  }
}
