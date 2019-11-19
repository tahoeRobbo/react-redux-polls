import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Poll match={{params: {id: "6ni6ok3ym7mf1p33lnez"}}}/>
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
