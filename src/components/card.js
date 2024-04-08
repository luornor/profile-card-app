import React from 'react';
import './Card.css';
import Avatar from "./avatar.js";
import Info from "./Info.js";


const card = ({user,info}) => {
  return (
    <>
     <div className='profile_card'>
    <Avatar avatarUrl={user.avatarUrl}/>
   <Info info = {info}/>

 </div>
 </>
   
  );
};

export default card;
