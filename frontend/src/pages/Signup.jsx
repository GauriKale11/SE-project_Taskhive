import React, { useState } from "react";
import '../styles/login.css'
import logo from '../assets/logo.jpg'

const Signup = () => {
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, institute, email, contact, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      // Redirect to login page after successful signup
      window.location.href = "/login";
    } else {
      alert(data.error);
    }
  } catch (err) {
    console.error(err);
    alert("Signup failed");
  }
};


  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-box">
          <h1>Student Signup</h1>
          <form onSubmit={handleSignup}>
        
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