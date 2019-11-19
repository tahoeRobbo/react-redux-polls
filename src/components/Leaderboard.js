import React from 'react'
import { connect } from 'react-redux'

import LeaderProfile from './LeaderProfile'

function Leaderboard ({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id} className='user'>
            <LeaderProfile user={user} />
          </li>
        )
      })}
    </ul>
  )
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, polls, answers } = users[id]

        return {
          name,
          id,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        }
    })
      .sort((a, b) => (b.polls + b.answers) - (a.polls + a.answers))
  }
}
export default connect(mapStateToProps)(Leaderboard)
