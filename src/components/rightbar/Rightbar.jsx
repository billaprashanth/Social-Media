import React from 'react'
import'./Rightbar.css'
import Message from '../message/Message.jsx'
import FriendReq from '../friendReq/FriendReq.jsx'


export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-container">
      <Message/>
      <FriendReq/>
      </div>

    </div>
  )
}
