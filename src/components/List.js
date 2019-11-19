import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class List extends Component {
  render () {
    return (
      <ul className='dashboard-list'>
        {this.props.questions.map((question) => {
          return (
            <li key={question.id}>
              <Link to={`/polls/${question.id}`}>
                {question.question}
              </Link>
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
