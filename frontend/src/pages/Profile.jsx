import React, { useEffect, useState } from "react";
import profileImage from "../assets/react.svg";
import { FaLinkedin, FaGithub, FaGoogleDrive, FaPencil } from "react-icons/fa6";
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    institute_name: "",
  });

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
      </section>
    </section>
  );
};

export default Profile;
