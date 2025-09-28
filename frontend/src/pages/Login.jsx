import React, { useState } from "react";
import '../styles/login.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div className="login-container">
  <div className="login-card">
    <div className="login-box">
      <h1>Student Login</h1>
      <p>new user? <Link to="/signup"><u>create new account</u></Link></p>
      <form onSubmit={handleLogin}>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@example.com"
            required
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>

    <div className="login-logo">
      <img src={logo} alt="logo" />
    </div>
  </div>
</div>
)}

export default Login