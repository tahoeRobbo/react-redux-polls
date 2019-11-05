import { RECEIVE_USERS } from '../constants'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
