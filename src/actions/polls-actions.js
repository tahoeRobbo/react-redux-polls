import { RECEIVE_POLLS, ADD_POLL } from '../constants'
import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()
    return savePoll({
      ...poll,
      author: authedUser
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()))
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll
  }
}


