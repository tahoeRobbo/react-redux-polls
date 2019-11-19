import { ADD_ANSWER } from '../constants'
import { savePollAnswer } from '../utils/api'
import { showLoading , hideLoading } from 'react-redux-loading'

export function handleAddAnswer (answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    return savePollAnswer(answerData)
    .then(() => dispatch(addAnswer(answerData)))
    .then(() => dispatch(hideLoading()))
  }
}

function addAnswer ({ answer, authedUser, id }) {
  return {
    type: ADD_ANSWER,
    answer,
    authedUser,
    id
  }
}
