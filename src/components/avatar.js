import React from 'react'
import './Avatar.css'

//avatar component image
const Avatar = ({avatarUrl})=>{
    return <img className='avatar_img' src={avatarUrl} alt="profile image"/>
  }

export default Avatar;