import React from 'react'
import './Header.css'
import Logo from '../imgs/logo.png'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='Header'>
        <div>
        <img src={Logo} alt="Logo" className='logo'/>
        </div>
        <div className="nav">
        <Link to="/" style={{textDecoration: 'none'}}>
        <p className='nav-item' >Sign in</p>
        </Link>
        <Link to="/Register" style={{textDecoration: 'none'}}>
        <p className='nav-item'>Register</p>
        </Link>
        </div>
    </div>
  )
}
