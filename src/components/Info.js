import React from 'react';
import './Info.css';

//info component
const Info = ({info}) => {
    return (
      <div className='info'>
        <p className='info full-name'> {info.name} </p>
        <p className='info role'>{info.bio}</p>
        

        <p class="place">{info.location}</p>
      
        <div className="social-container">
            <a className='linkedIn' href={info.linkedin}>LinkedIn</a>
            <a className='email' href={info.email}>Email</a>
            <a className='github' href={info.github}>Github</a>
            <a className='site' href={info.website}>Website</a>
        </div>
  
      </div>
    )
  }

  export default Info;