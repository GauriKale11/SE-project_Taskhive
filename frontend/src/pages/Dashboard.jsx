import React from "react";
import "../styles/dashboard.css";
import Calender_copy from "../components/Calender_copy";

const Dashboard = ({ tasks }) => {
  return (
    <div className="dashboard-container">

      <div className="dashboard-main">
        <h2 className="section-title">Analytics Overview</h2>
        <div className="chart-placeholder">
          <p>Pie Chart Analysis </p>
        </div>
      </div>

      <div className="dashboard-calendar">
        <Calender_copy tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;