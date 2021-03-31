import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown/with-html'
import timeSince from '../util/TimeSince'
import '../App.css'

function IssueDetail() {
  const { issueNumber } = useParams()
  const [ issue, setIssue ] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIssue(data)
      })
  }, [issueNumber])

  if (!issue) {
    return "Loading..."
  } else {
    return (
      <div>
        {issue && (
          <>
            <h2>
              {issue.title}
            </h2>
            <h3>
              <div>
              {issue.number}
              </div>
              <div>
                {issue.user.login} created { timeSince(new Date(issue.created_at)) }
              </div>
              <div>
              </div>
            </h3>
            <div className="markdown">
              <Markdown source={issue.body} allowDangerousHtml={true} />
            </div>
          </>
        )}
      </div>
    )
  }
}

export default IssueDetail;