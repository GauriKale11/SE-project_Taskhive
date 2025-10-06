import React from "react";
import "../styles/dashboard.css";
// import Calender from "../components/Calender";
import Calender_copy from "../components/Calender_copy";

const Dashboard = ({ tasks }) => {
  return (
    <div>
      <p>Dashboard page</p>
      {/* <Calender /> */}
      <Calender_copy tasks={tasks} />
    </div>
  );
};

export default Dashboard;