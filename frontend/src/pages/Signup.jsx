import React, { useState } from "react";
import '../style/pagestyle/Login.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Signing in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Student Signup</h1>
        <form onSubmit={handleLogin}>
        
        <label>
            <span>Name</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Name"
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
    </div>
)}

export default Signup
