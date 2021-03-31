// import React from 'react'
import { useState } from 'react'
import UserCard from './UserCard'
import './Users.css'

export default function Users() {
  const [text, setText] = useState('')
  const [userInfo, setUserInfo] =  useState([])

  function handleSubmit(event) {
    event.preventDefault()
    console.log(text)
    fetch(`https://api.github.com/users/${text}`)
      .then(res => res.json())
      .then(data => {
        setUserInfo([...userInfo, data])
      })
      console.log(userInfo)
  }

  

  const handleChange = (event) => {
    setText(event.target.value)
  }

  if (!userInfo) {
    return (
    <div className="container">
      <h1>User Search</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={handleChange} type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
      <h1>Results</h1>
    </div>
      )} else {
    return (
      <div className="container">
        <h1>User Search</h1>
        <div>
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={handleChange} type="text" />
          <button type="submit">Search</button>
        </form>
        <h1>Results</h1>
        <br></br>
        <div>
          {userInfo.map((user) => {
            return (
              <div key={user.id}>
                <UserCard user={user} />
              </div>
            )
          })}
        </div>
        </div>
      </div>
    )
  }
}
