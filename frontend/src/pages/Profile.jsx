<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import profileImage from "../assets/react.svg";
import { FaLinkedin, FaGithub, FaGoogleDrive, FaPencil } from "react-icons/fa6";
=======
import React, { useState } from "react";
import { FaCircleUser, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
>>>>>>> main
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    institute_name: "",
  });

<<<<<<< HEAD
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found — using localStorage fallback");
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser) setUser(storedUser);
          return;
        }
=======
  const [ShowAddSubject, SetShowAddSubject] = useState(false);
  const [subjects, setSubjects] = useState([
    // "OS",
    // "DBMS",
    // "SE",
    // "DSA",
    // "PC",
    // "OOPD",
    // "CO",
  ]);
>>>>>>> main

        const res = await fetch("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch profile:", res.status);
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser) setUser(storedUser);
          return;
        }

        const data = await res.json();
        console.log("Fetched profile:", data);

        // ✅ Store latest user info locally for future
        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <section className="profile-container">
      <section className="profile-card">
        <div className="personal">
          <img src={profileImage} alt="Profile" />
          <div className="changeDetails">
            <h1 className="name">Name: {user.name || "N/A"}</h1>
            <FaPencil />
          </div>
          <p className="role">Registered mail: {user.email || "N/A"}</p>
          <p className="number">Contact Number: {user.contact || "N/A"}</p>
          <p className="institution">
            Institute: {user.institute_name || "N/A"}
          </p>
          <div className="social">
            <FaLinkedin />
            <FaGithub />
            <FaGoogleDrive />
          </div>
        </div>
<<<<<<< HEAD
      </section>
=======

        <dl className="profile-social">
          <div className="profile-social-item">
            <dd>
              {editable ? (
                <>
                  <p>Linkedin: </p>
                  <input
                    type="text"
                    value={linkedin}
                    onChange={(e) => SetLinkedin(e.target.value)}
                    className="profile-input"
                    aria-label="Contact Number"
                  />
                </>
              ) : (
                <FaLinkedin className="social-icon" />
              )}
            </dd>
          </div>

          <div className="profile-social-item">
            <dd>
              {editable ? (
                <>
                  <p>GitHub: </p>
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => SetGithub(e.target.value)}
                    className="profile-input"
                    aria-label="Contact Number"
                  />
                </>
              ) : (
                <FaGithub className="social-icon" />
              )}
            </dd>
          </div>

          <div className="profile-social-item">
            <dd>
              {editable ? (
                <>
                  <p>Google Drive: </p>
                  <input
                    type="text"
                    value={gdrive}
                    onChange={(e) => SetGdrive(e.target.value)}
                    className="profile-input"
                    aria-label="Contact Number"
                  />
                </>
              ) : (
                <FaGoogleDrive className="social-icon" />
              )}
            </dd>
          </div>
        </dl>

        {/* for subject what fields are needed ??
          subject_name, subject_id, 
        */}
        <div className="profile-subjects">
          <h3>Subjects</h3>
          <ul>
            {subjects.map((subj) => (
              <li key={subj}>{subj}</li>
            ))}
          </ul>
          {editable && (
            <input
              type="button"
              value="Add Subject"
              className="subject-add-btn"
              onClick={() => {
                SetShowAddSubject(true);
              }}
            />
          )}
        </div>

        {ShowAddSubject && (
          <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3 className="modal-title">Academic Courses</h3>
              <div className="modal-scroll"></div>

              <div className="subject-add-form">
                <label className="subject-label">Subject Name</label>
                <input type="text" className="subject-input" />
                <input type="button" value="Add"  />
              </div>

              <button
                onClick={() => SetShowAddSubject(false)}
                className="close-btn"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {editable && (
          <button
            className="profile-save-btn"
            onClick={() => SetEditable(false)}
          >
            Save Changes
          </button>
        )}
      </div>
>>>>>>> main
    </section>
  );
};

export default Profile;
