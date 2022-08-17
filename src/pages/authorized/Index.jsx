import React from 'react'
import "./styles.css";

function Authorized() {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  return (
    <div className='content'>
        <h1>Welcome {authUser.name}!</h1>
    </div>
  )
}

export default Authorized