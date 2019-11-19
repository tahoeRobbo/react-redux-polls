import { RECEIVE_POLLS, ADD_POLL, ADD_ANSWER } from '../constants'

export default function pollsReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll
      }
    case ADD_ANSWER:
      const votesKey = action.answer + 'Votes'
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [votesKey]: state[action.id][votesKey].concat(action.authedUser)
        }
      }
    default:
      return state
  }
}
