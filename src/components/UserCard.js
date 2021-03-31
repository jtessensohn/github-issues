import React from 'react'
import '../App.css'
import './Users.css'

export default function UserCard(props) {
  return (
    <>
      <div className="userCard">
        <div className="avatar">
          <img src={props.user.avatar_url} alt='user profile avatar' />
        </div>
        <div className="userInfo">
          <div className="username">
              {props.user.login}
            </div>
            <div className="userDetails">
            <p>
              {props.user.public_repos} repos
            </p>
            <p>
              {props.user.followers} followers
            </p>
            <p>
              {props.user.following} following
            </p>
          </div>
        </div>
      </div>
    </>
  )
}