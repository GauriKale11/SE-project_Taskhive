import React, { useState } from "react";
import "../styles/add-task.css";
import logo from "../assets/logo.jpg";

const Task = ({ onSubmit }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    start_date: "",
    due_date: "",
    default_time: "",
    notify: false,
    priority: "Medium", // added priority
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare object for backend
    const newTask = {
      title: taskData.title,
      description: taskData.description,
      deadline: taskData.due_date, // map frontend due_date to backend deadline
      priority: taskData.priority,
      user_id: 1, // later replace with logged in user
    };

    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      console.log("Task added:", data);
      alert("Task added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }

    // Call old onSubmit prop if passed (kept old functionality)
    if (typeof onSubmit === "function") {
      onSubmit(taskData);
    }

    // Reset form
    setTaskData({
      title: "",
      description: "",
      start_date: "",
      due_date: "",
      default_time: "",
      notify: false,
      priority: "Medium",
    });
  };

  return (
    <div className="add-task-container">
      <div className="add-task-logo">
        <img src={logo} alt="logo" />
      </div>

      <form className="add-task-box" onSubmit={handleSubmit}>
        <div className="add-form">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="add-form">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={taskData.description}
            onChange={handleChange}
          />
        </div>

        <div className="add-form">
          <label>Start Date</label>
          <input
            type="date"
            name="start_date"
            value={taskData.start_date}
            onChange={handleChange}
          />
        </div>

        <div className="add-form">
          <label>Due Date</label>
          <input
            type="date"
            name="due_date"
            value={taskData.due_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="add-form">
          <label>Default time of day</label>
          <input
            type="number"
            name="default_time"
            value={taskData.default_time}
            onChange={handleChange}
          />
        </div>

        <div className="add-form">
          <label>Do you want to get notifications?</label>
          <input
            type="checkbox"
            name="notify"
            checked={taskData.notify}
            onChange={handleChange}
          />
        </div>

        <div className="add-form">
          <label>Priority</label>
          <select
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="add-btn-div">
          <button className="add-sub-btn" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Task;
