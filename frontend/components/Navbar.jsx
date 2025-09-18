import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <p><b>Navbar</b></p>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/task">Task</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
    </div>
  )
}

export default Navbar
