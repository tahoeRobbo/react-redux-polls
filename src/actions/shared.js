import { AUTHED_ID } from '../constants'
import { getInitialData } from '../utils/api'

import { receivePolls } from './polls-actions'
import { receiveUsers } from './users-actions'
import { setAuthedUser } from './authed-user-actions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(receivePolls(polls))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}
