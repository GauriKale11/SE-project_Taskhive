import React, { useState } from "react";
import profileImage from "../assets/react.svg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

import "../styles/profile.css";


const Profile = () => {
  const [username,setusername] = useState("Noopur Karkare");
  const [role,setrole] = useState("Student");
  const [contact,setcontact] = useState("9763718189");
  const [school,setschool] = useState("COEP technological University");
  const [subjects,setSubjects] = useState(["OS","DBMS","SE","DSA","PC","OOPD","CO"]);
  return (
    <section className="profile-container">
    <section class="profile-card">
    <div className="personal">
      <img src={profileImage} alt="" />
      <div className="changeDetails">
        <h1 className="name"> Name : {username}</h1>
        <FaPencil/>
      </div>
      <p className="role">Role: {role}</p>
      <p className="number">Contact Number : {contact}</p>
      <p className="institution">Institute : {school}</p>
      <div className="social">
      <FaLinkedin />
      <FaGithub />
      <FaGoogleDrive/>
      </div>
      <div className='skills'>
        <h5>Subjects:</h5>
        <ul>
        {subjects.map((element) => (
          <li key={element}>{element}</li>
        ))}
</ul>

    </div>
    </div>
    </section>
    </section>
  );
};

export default Profile;