import React, { useState } from "react";
import { FaCircleUser, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import "../styles/profile.css";

const Profile = () => {
  const [username, setusername] = useState("Noopur Karkare");
  const [gmail, setgmail] = useState("noopurkarkare@gmail.com");
  const [contact, setcontact] = useState("9763718189");
  const [school, setschool] = useState("COEP technological University");
  const [linkedin, SetLinkedin] = useState("");
  const [github, SetGithub] = useState("");
  const [gdrive, SetGdrive] = useState("");

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

  const [editable, SetEditable] = useState(false);
  const [profileImg, SetProfileImg] = useState(null);

  const handleImgChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      console.log(imgURL);
      SetProfileImg(imgURL);
    }
  };

  return (
    <section className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div
            className="profile-img-div"
            onClick={() => document.getElementById("profile-upload").click()}
          >
            {profileImg ? (
              <img src={profileImg} alt="Profile" className="profile-img" />
            ) : (
              <FaCircleUser className="profile-img" />
            )}

            <FaPencil
              className="edit-icon"
              onClick={(e) => {
                e.stopPropagation();
                SetEditable(!editable);
              }}
            />

            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleImgChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="profile-name-edit">
            {editable ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="profile-input"
                aria-label="Username"
              />
            ) : (
              <h1 className="name">{username}</h1>
            )}
          </div>

          <dl className="profile-contact">
            <div className="profile-contact-item">
              <dt>Email:</dt>
              <dd>
                {editable ? (
                  <input
                    type="email"
                    value={gmail}
                    onChange={(e) => setgmail(e.target.value)}
                    className="profile-input"
                    aria-label="Email"
                  />
                ) : (
                  gmail
                )}
              </dd>
            </div>

            <div className="profile-contact-item">
              <dt>Contact:</dt>
              <dd>
                {editable ? (
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setcontact(e.target.value)}
                    className="profile-input"
                    aria-label="Contact Number"
                  />
                ) : (
                  contact
                )}
              </dd>
            </div>

            <div className="profile-contact-item">
              <dt>Institute:</dt>
              <dd>
                {editable ? (
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setschool(e.target.value)}
                    className="profile-input"
                    aria-label="Institute"
                  />
                ) : (
                  school
                )}
              </dd>
            </div>
          </dl>
        </div>

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
    </section>
  );
};

export default Profile;
