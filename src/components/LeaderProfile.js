import React from 'react'

function LeaderProfile ({ user }) {
  const { avatarURL, name, polls, answers } = user

  return (
    <React.Fragment>
      <img src={avatarURL} alt={`Avatar for ${name}`} />
      <div>
        <h1>{name}</h1>
        <p>{polls} Polls</p>
        <p>{answers} Answers</p>
      </div>
    </React.Fragment>
  )
}

export default LeaderProfile
