import React, { useState } from "react";
import profileImage from "../assets/react.svg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";

import "../styles/profile.css";


const Profile = () => {
  const [username,setusername] = useState("Noopur Karkare");
  const [role,setrole] = useState("Student");
  const [contact,setcontact] = useState("9763718189");
  const [school,setschool] = useState("COEP technological University");
  return (
    <section class="profile-card">
    <div className="personal">
      <img src={profileImage} alt="" />
      <h1 className="name"> NAME : {username}</h1>
      <p className="role">ROLE: {role}</p>
      <p className="number">Contact Number : {contact}</p>
      <p className="institution">Institute : {school}</p>
      <div className="social">
      <FaLinkedin />
      <FaGithub />
      <FaGoogleDrive/>
      </div>
      <div className='skills'>
        <h2>Subjects:</h2>
        <ul>
            <li>OS</li>
            <li>OOPD</li>
            <li>PC</li>
            <li>DSA</li>
            <li>DBMS</li>
            <li>SE</li>
        </ul>
    </div>
    </div>
    </section>
  );
};

export default Profile;