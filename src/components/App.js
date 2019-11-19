import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom'

import { handleInitialData } from '../actions/shared'

import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/polls/:id' component={Poll} />
                  <Route path='/add' component={AddPoll} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
