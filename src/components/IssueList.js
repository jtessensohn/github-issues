import React, { Component } from 'react'
import Issue from './Issue'
import '../App.css';


class IssueList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    this.fetchIssues()
  }

  fetchIssues = () => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          issues: data
        })
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.issues.map(issue => {
          return (
            <div key={issue.id}>
              <Issue issue={issue} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default IssueList;