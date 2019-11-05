import { RECEIVE_POLLS } from '../constants'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}
