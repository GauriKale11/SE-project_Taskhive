import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Calendar from "../components/Calendar";
import Charts from "../components/Charts";
import axios from "axios";

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [tasks, setTasks] = useState([]);

  const onMonthClick = () => setShowCalendar(true);
  const onClosePopup = () => setShowCalendar(false);

  // Fetch user-specific tasks here
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (!storedUser || !token) {
          console.warn("User not logged in or missing credentials");
          return;
        }

        const res = await axios.get(
          `https://se-project-taskhive.onrender.com/api/tasks?user=${encodeURIComponent(storedUser.name)}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Fetched user-specific tasks:", res.data);
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-heroes">
        {/* Analytics section */}
        <div className="dashboard-main">
          <h2 className="section-title">Analytics Overview</h2>
          <div className="chart-placeholder">
            <Charts tasks={tasks} />
          </div>
        </div>

        {/* Calendar section */}
        <div className="dashboard-calendar">
          <Calendar tasks={tasks} onMonthClick={onMonthClick} />
        </div>

        {/* Calendar popup */}
        {showCalendar && (
          <div className="calendar-popup-overlay" onClick={onClosePopup}>
            <div
              className="calendar-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <Calendar tasks={tasks} />
              <button className="close-btn" onClick={onClosePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="task-history-data">
        <h2 className="section-title">Tasks Completed History</h2>
        <div className="task-cards">
          {tasks.filter((task) => task.is_completed).length === 0 ? (
            <p className="no-tasks">No completed tasks yet.</p>
          ) : (
            tasks
              .filter((task) => task.is_completed)
              .map((task, indx) => (
                <div className="task-card" key={task.task_id || indx}>
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-desc">{task.description}</p>
                  <p className="task-date">
                    Completed on:{" "}
                    {new Date(task.updated_at).toLocaleDateString()}
                  </p>
                  <p className="task-priority">Priority: {task.priority}</p>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;