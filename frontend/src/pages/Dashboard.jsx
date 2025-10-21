import React, { useState } from "react";
import "../styles/dashboard.css";
import Calendar from "../components/Calendar";
import Charts from "../components/Charts";

const Dashboard = ({ tasks }) => {
  const [showCalender, SetShowCalender] = useState(false);

  const onMonthClick = () => {
    SetShowCalender(true);
  };

  const onClosePopup = () => {
    SetShowCalender(false);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <h2 className="section-title">Analytics Overview</h2>
        <div className="chart-placeholder">
          <Charts/>
        </div>
      </div>

      <div className="dashboard-calendar">
        <Calendar tasks={tasks} onMonthClick={onMonthClick} />
      </div>

      {showCalender && (
        <div className="calendar-popup-overlay" onClick={onClosePopup}>
          <div className="calendar-popup" onClick={(e) => e.stopPropagation()}>
            <Calender_copy tasks={tasks} /> {/* same calendar */}
            <button className="close-btn" onClick={onClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
