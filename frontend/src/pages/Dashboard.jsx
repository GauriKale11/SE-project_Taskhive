import React from "react";
import "../styles/dashboard.css";
import Calender from "../components/Calender";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: 'black'}}>
      <p>Dashboard page</p>
      <Calender />
    </div>
  );
};

export default Dashboard;
