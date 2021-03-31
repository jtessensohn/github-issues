import React from 'react'
import { Link } from 'react-router-dom';
import './Issue.css'

function Issue(props) {
  function getDays() {
    const currentDay = new Date();
    const datesAsInt = Date.parse(props.issue.created_at)
    const daysSince = currentDay - datesAsInt
    const roundDaysSince = Math.round(daysSince/8.64e+7)
    return roundDaysSince === 0 ? 'less than one' : roundDaysSince
  }

  return (
    <div className="Issue">
      <div className="IssueTitle">
        <Link to={`issue/${props.issue.number}`}>
          {props.issue.title}
        </Link>
        
      </div>
      <div className="IssueUser">
        #{props.issue.number} opened {getDays()} day(s) ago by {props.issue.user.login}
      </div>
    </div>
  )
}

export default Issue;