import React, { useState } from "react";
import "../styles/add-task.css";
import logo from "../assets/logo.jpg";

const Task = ({ onSubmit }) => {

    const [ taskData, SetTaskData ] = useState({
        title: "", description: "", start_date: "", due_date: "",  default_time:"", notify:false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        SetTaskData((prev) => ({
            ...prev, 
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
            console.log(taskData);
            onSubmit(taskData);
        } else {
            console.warn('onSubmit is not a function');
        }
        SetTaskData({
          title: "",
          description: "",
          start_date: "",
          due_date: "",
          default_time: "",
          notify: false,
        }); 
      };

  return (
    <div className="add-task-container">
      <div className="add-task-logo">
        <img src={logo} />
      </div>

      <form className="add-task-box" onSubmit={handleSubmit}>
        <div className="add-form">
          <label>Title</label>
          <input type="text" name="title" value={taskData.title} onChange={handleChange} />
        </div>

        <div className="add-form">
          <label>Description</label>
          <input type="text" name="description" value={taskData.description} onChange={handleChange} />
        </div>

        <div className="add-form">
          <label>Start Date</label>
          <input type="date" name="start_date" value={taskData.start_date} onChange={handleChange} />
        </div>

        <div className="add-form">
          <label>Due Date</label>
          <input type="date" name="due_date" value={taskData.due_date} onChange={handleChange} />
        </div>

        <div className="add-form">
          <label>Default time of day</label>
          <input type="number" name="default_time" value={taskData.default_time} onChange={handleChange} />
        </div>

        <div className="add-form">
          <label>Do you want to get notifications?</label>
          <input type="checkbox" name="notify" checked={taskData.notify} onChange={handleChange} />
        </div>

        <div className="add-btn-div">
          <button className="add-sub-btn">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Task;
