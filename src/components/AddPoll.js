import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls-actions'

class AddPoll extends Component {
  initialState = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: ''
  }

  state = this.initialState

  handleInputChange = (e) => {
    const { name, value } = e.target
    e.preventDefault()


    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.dispatch(handleAddPoll(this.state))
      .then(this.resetState())
    }

  isDisabled = () => {
    const { question, a, b, c, d } = this.state

    return (
      question === ''
      || a === ''
      || b === ''
      || c === ''
      || d === ''
    )
  }

  resetState = () => {
    this.setState({
      ...this.initialState
    })
  }

  render () {
    const { question, a, b, c, d} = this.state

    return (
      <div>
        <form className='add-form' onSubmit={this.handleSubmit}>
          <h3 style={{marginBottom: 5}}>What is your question?</h3>
          <input
            value={question}
            onChange={this.handleInputChange}
            type='text'
            name='question'
            className='input'
          />
          <h3>What are the options?</h3>
          <label className='label' htmlFor='a'>A.</label>
          <input
            value={a}
            onChange={this.handleInputChange}
            type='text'
            name='a'
            className='input'
          />
          <label className='label' htmlFor='b'>B.</label>
          <input
            value={b}
            onChange={this.handleInputChange}
            type='text'
            name='b'
            className='input'
          />
          <label className='label' htmlFor='c'>C.</label>
          <input
            value={c}
            onChange={this.handleInputChange}
            type='text'
            name='c'
            className='input'
          />
          <label className='label' htmlFor='d'>D.</label>
          <input
            value={d}
            onChange={this.handleInputChange}
            type='text'
            name='d'
            className='input'
          />
          <button
            disabled={this.isDisabled()}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddPoll)
