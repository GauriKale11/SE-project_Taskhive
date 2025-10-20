import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Charts() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading charts...</p>;
  }

  // Completed vs Pending
  const completed = tasks.filter((t) => t.is_completed).length;
  const pending = tasks.length - completed;
  const statusData = [
    { label: "Completed", value: completed, color: "#8ee791ff" },
    { label: "Pending", value: pending, color: "#f18c84ff" },
  ];

  // Priority Distribution
  const priorityCounts = tasks.reduce((acc, t) => {
    const p = t.priority ? t.priority.toLowerCase() : "medium";
    acc[p] = (acc[p] || 0) + 1;
    return acc;
  }, {});
  const priorityData = Object.entries(priorityCounts).map(([p, c]) => ({
    label: p.charAt(0).toUpperCase() + p.slice(1),
    value: c,
    color: p === "high" ? "#f18c84ff" : p === "medium" ? "#f0cc97ff" : "#8ee791ff",
  }));

  // Subject-wise Tasks
  const subjectCounts = tasks.reduce((acc, t) => {
    const subject = t.subject_id || "Unassigned";
    acc[subject] = (acc[subject] || 0) + 1;
    return acc;
  }, {});
  const subjectData = Object.entries(subjectCounts).map(([s, c], i) => ({
    label: s,
    value: c,
    color: ["#9fc5e4ff", "#ee88a3ff", "#03a9f4", "#c7f395ff", "#f5df9cff"][i % 5],
  }));

  // Reusable Legend Component
  const Legend = ({ data }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
      {data.map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: 12,
              height: 12,
              backgroundColor: item.color,
              display: "inline-block",
              borderRadius: "50%",
            }}
          ></span>
          <span style={{ fontSize: "0.9rem", color: "#333" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
        {/* Chart 1: Completed vs Pending */}
        <div style={{ textAlign: "center" }}>
          <h3>Completion Status</h3>
          <PieChart series={[{ data: statusData, innerRadius: 40, outerRadius: 80 }]} width={180} height={180} />
          <Legend data={statusData} />
        </div>

        {/* Chart 2: Priority */}
        <div style={{ textAlign: "center" }}>
          <h3>Tasks by Priority</h3>
          <PieChart series={[{ data: priorityData, innerRadius: 40, outerRadius: 80 }]} width={200} height={200} />
          <Legend data={priorityData} />
        </div>

        {/* Chart 3: Subject-wise */}
        <div style={{ textAlign: "center" }}>
          <h3>Subject-wise Distribution</h3>
          <PieChart series={[{ data: subjectData, innerRadius: 40, outerRadius: 80 }]} width={200} height={200} />
          <Legend data={subjectData} />
        </div>
      </div>
    </div>
  );
}
