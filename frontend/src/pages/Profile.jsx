import React from "react";
import profileImage from "../assets/react.svg";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "../styles/profile.css";


const Profile = () => {
  return (
    <div className="personal">
      <img src={profileImage} alt="" />
      <h1 className="name">Name of user</h1>
      <p className="country">Serbia</p>
      <p className="stack">Front-End Web Developer</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="secondary">Following</button>
      </div>
      <div className="social">
      <FaLinkedin />
      <FaXTwitter />
      <FaGithub />
      <FaYoutube />
      <FaInstagram />
      </div>
      <div className='skills'>
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javscript</li>
            <li>React.js</li>
            <li>Wordpress</li>
            <li>SEO</li>
        </ul>
    </div>
    </div>
  );
};

export default Profile;