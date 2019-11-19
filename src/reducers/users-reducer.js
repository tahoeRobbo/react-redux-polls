import { RECEIVE_USERS, ADD_POLL, ADD_ANSWER } from '../constants'

export default function usersReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_POLL:
      const poll = action.poll
      const { author, id } = poll
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }

      }
    case ADD_ANSWER:
      const { authedUser} = action.authedUser
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: state[authedUser].answers.concat(action.id)
        }
      }
    default:
      return state
  }
}
