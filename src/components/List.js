import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  render () {
    return (
      <ul className='dashboard-list'>
        {this.props.questions.map((question, i) => {
          return (
            <li key={question.id}>
              {question.question}
            </li>
          )
        })}
      </ul>
    )
  }
}

List.propTypes = {
  questions: PropTypes.array.isRequired,
}

export default List
