import { AUTHED_ID } from '../constants'
import { getInitialData } from '../utils/api'

import { receivePolls } from './polls-actions'
import { receiveUsers } from './users-actions'
import { setAuthedUser } from './authed-user-actions'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(receivePolls(polls))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
