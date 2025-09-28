import React from 'react';
import "../styles/add-task.css";
import logo from "../assets/logo.jpg";

const Task = () => {
  return (
    <div className="add-task-container">
        <div className="add-task-logo">
            <img src={logo}  />
        </div>
        <div className="add-task-box">

            <div className="add-form">
                <label>Title</label>
                <input type="text"/>
            </div>

            <div className="add-form">
                <label>Description</label>
                <input type="text"/>
            </div>

            <div className="add-form">
                <label>Start Date</label>
                <input type="date"/>
            </div>

            <div className="add-form">
                <label>Due Date</label>
                <input type="date"/>
            </div>

            <div className="add-form">
                <label>Default time of day</label>
                <input type="number" />
            </div>

            <div className="add-form">
                <label>Do you want to get notifications?</label>
                <input type="checkbox"/>
            </div>
            <div className="add-btn-div">
                <button className="add-sub-btn">SUBMIT</button>
            </div>

        </div>
    </div>
  )
}

export default Task
