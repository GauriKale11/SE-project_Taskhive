import React, { useEffect, useState } from "react";
import userImg from "../assets/user.png";
import { FaLinkedin, FaGithub, FaGoogleDrive, FaPencil } from "react-icons/fa6";
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    institute_name: "",
  });

  const [editable, setEditable] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [gdrive, setGdrive] = useState("");
  const [subjects, setSubjects] = useState([
    "Database Systems",
    "Operating Systems",
  ]);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [profileImage, setProfileImage] = useState(userImg);

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

        const res = await fetch("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          console.error("Failed to fetch profile:", res.status);
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser) setUser(storedUser);
          return;
        }

        const data = await res.json();
        console.log("Fetched profile:", data);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    const fetchSubjects = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/subjects", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setSubjects(data.map((s) => s.subject_name));
      } catch (err) {
        console.error("Error loading subjects:", err);
      }
    };

    fetchProfile();
    fetchSubjects();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleAddSubject = async () => {
    if (newSubject.trim() === "") return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login required to add subject");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subject_name: newSubject.trim() }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubjects((prev) => [...prev, data.subject_name]);
        setNewSubject("");
        setShowAddSubject(false);
      } else {
        alert(data.error || "Failed to add subject");
      }
    } catch (err) {
      console.error("Error adding subject:", err);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <FaPencil
          className="edit-icon"
          onClick={() => setEditable(!editable)}
          title="Edit profile"
        />
        <div className="personal">
          <div className="profile-img-wrapper">
            <img
              src={profileImage}
              alt="Profile"
              className={`profile-img ${editable ? "clickable" : ""}`}
              onClick={() => {
                if (editable) document.getElementById("imageUpload").click();
              }}
            />
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>

          <div className="changeDetails">
            <h1 className="name">{user.name || "N/A"}</h1>
          </div>
          <p className="role">📧 {user.email || "N/A"}</p>
          <p className="number">📞 {user.contact || "N/A"}</p>
          <p className="institution">🏫 {user.institute_name || "N/A"}</p>

          <div className="social">
            <FaLinkedin
              className="social-icon"
              title="LinkedIn"
              style={{ color: "#0A66C2" }}
            />
            <FaGithub
              className="social-icon"
              title="GitHub"
              style={{ color: "#333" }}
            />
            <FaGoogleDrive
              className="social-icon"
              title="Google Drive"
              style={{ color: "#0F9D58" }}
            />
          </div>
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-socials">
          <h3>Social Links</h3>

          <div className="profile-social-item">
            {editable ? (
              <>
                <label>LinkedIn:</label>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="Enter LinkedIn URL"
                />
              </>
            ) : (
              <p>{linkedin || "LinkedIn: Not linked"}</p>
            )}
          </div>

          <div className="profile-social-item">
            {editable ? (
              <>
                <label>GitHub:</label>
                <input
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="Enter GitHub URL"
                />
              </>
            ) : (
              <p>{github || "GitHub: Not linked"}</p>
            )}
          </div>

          <div className="profile-social-item">
            {editable ? (
              <>
                <label>Google Drive:</label>
                <input
                  type="text"
                  value={gdrive}
                  onChange={(e) => setGdrive(e.target.value)}
                  placeholder="Enter Drive link"
                />
              </>
            ) : (
              <p>{gdrive || "Google Drive: Not linked"}</p>
            )}
          </div>
        </div>

        <div className="profile-subjects">
          <h3>Academic Subjects</h3>
          <ul>
            {subjects.map((subj, idx) => (
              <li key={idx}>{subj}</li>
            ))}
          </ul>

          {editable && (
            <button
              className="subject-add-btn"
              onClick={() => setShowAddSubject(true)}
            >
              Add Subject
            </button>
          )}
        </div>

        {editable && (
          <button
            className="profile-save-btn"
            onClick={() => setEditable(false)}
          >
            Save Changes
          </button>
        )}
      </div>

      {/* Modal for adding new subject */}
      {showAddSubject && (
        <div className="modal-overlay" onClick={() => setShowAddSubject(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Subject</h3>
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              placeholder="Enter subject name"
              className="subject-input"
            />
            <div className="modal-actions">
              <button onClick={handleAddSubject} className="add-btn">
                Add
              </button>
              <button
                onClick={() => setShowAddSubject(false)}
                className="close-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
