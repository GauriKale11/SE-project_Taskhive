import React from "react";
import "../styles/dashboard.css";
import Calender_copy from "../components/Calender_copy";

const Dashboard = ({ tasks }) => {
  return (
    <div className="dashboard-div">
      <div className="calender-div">
        {/* <p>Dashboard page</p> */}
        <Calender_copy tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
