import React from 'react'
import { Link } from 'react-router-dom'
import '../style/componentstyle/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-title'>
        <h1>TaskHive</h1>
      </div>

      <div className='links'>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/task">Task</Link>
        <Link to="/profile">Profile</Link>
      </div>
        
    </div>
  )
}

export default Navbar
