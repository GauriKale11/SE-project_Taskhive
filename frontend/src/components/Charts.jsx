import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Charts() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks with subjects
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks-with-subjects")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Loading charts...
      </p>
    );

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

  // Subject-wise Distribution
  const subjectCounts = tasks.reduce((acc, t) => {
    const subject = t.subject_name || "Unassigned";
    acc[subject] = (acc[subject] || 0) + 1;
    return acc;
  }, {});

  const subjectData = Object.entries(subjectCounts).map(([s, c], i) => ({
    label: s,
    value: c,
    color: ["#9fc5e4ff", "#ee88a3ff", "#03a9f4", "#c7f395ff", "#f5df9cff"][i % 5],
  }));

  // Reusable Legend
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
        {/* Completion Status */}
        <div style={{ textAlign: "center" }}>
          <h3>Completion Status</h3>
          <PieChart series={[{ data: statusData }]} width={180} height={180} legend={false} />
          
        </div>

        {/* Priority */}
        <div style={{ textAlign: "center" }}>
          <h3>Tasks by Priority</h3>
          <PieChart series={[{ data: priorityData }]} width={200} height={200} legend={false} />
          
        </div>

        {/* Subject-wise */}
        <div style={{ textAlign: "center" }}>
          <h3>Subject-wise Distribution</h3>
          <PieChart series={[{ data: subjectData }]} width={200} height={200} legend={false} />
         
        </div>
      </div>
    </div>
  );
}
