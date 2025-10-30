import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "../styles/charts.css";

export default function Charts({tasks = []}) {

  // Completed vs Pending
  const completed = tasks.filter((t) => t.is_completed).length;
  const pending = tasks.length - completed;
  const statusData = [
    { label: "Completed", value: completed, color: "#4caf50" },
    { label: "Pending", value: pending, color: "#f44336" },
  ];

  // Priority
  const priorityCounts = tasks.reduce((acc, t) => {
    const p = t.priority ? t.priority.toLowerCase() : "medium";
    acc[p] = (acc[p] || 0) + 1;
    return acc;
  }, {});
  const priorityData = Object.entries(priorityCounts).map(([p, c]) => ({
    label: p.charAt(0).toUpperCase() + p.slice(1),
    value: c,
    color: p === "high" ? "#f44336" : p === "medium" ? "#ffb74d" : "#81c784",
  }));

  // Subject-wise
  const subjectCounts = tasks.reduce((acc, t) => {
    const s = t.subject_name || "Unassigned";
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});
  const subjectData = Object.entries(subjectCounts).map(([s, c], i) => ({
    label: s,
    value: c,
    color: ["#42a5f5", "#ab47bc", "#26a69a", "#ec407a", "#ffee58"][i % 5],
  }));

  const Legend = ({ data }) => (
    <div className="chart-legend">
      {data.map((item) => (
        <div key={item.label} className="legend-item">
          <span
            className="legend-dot"
            style={{ backgroundColor: item.color }}
          ></span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="charts-wrapper">
      <div className="chart-card">
        <h3>Completion Status</h3>
        <PieChart
          series={[{ data: statusData, innerRadius: 0 }]}
          width={230}
          height={230}
          legend={false}
          />
      </div>

      <div className="chart-card">
        <h3>Tasks by Priority</h3>
        <PieChart
          series={[{ data: priorityData, innerRadius: 0 }]}
          width={230}
          height={230}
          legend={false}
        />
      </div>

      <div className="chart-card">
        <h3>Subject-wise Distribution</h3>
        <PieChart
          series={[{ data: subjectData, innerRadius: 0 }]}
          width={230}
          height={230}
          legend={false}
        />
      </div>
    </div>
  );
}
