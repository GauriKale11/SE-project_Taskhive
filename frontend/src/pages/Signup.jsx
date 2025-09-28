import React, { useState } from "react";
import '../styles/login.css'
import logo from '../assets/logo.jpg'

const Signup = () => {
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Signing in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-box">
          <h1>Student Signup</h1>
          <form onSubmit={handleLogin}>
        
            <label>
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required/>
            </label>

            <label>
              <span>Institute</span>
              <input
                type="text"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                placeholder="Enter Institute Name"
                required
              />
            </label>

            <label>
              <span>Contact Number</span>
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter Contact Number"
                required
              />
            </label>

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

            <button type="submit">Signup</button>
          </form>
        </div>

        <div className="login-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
)}

export default Signup