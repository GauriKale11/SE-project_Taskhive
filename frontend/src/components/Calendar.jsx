import React, { useEffect, useState } from "react";
import "../styles/calendar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Calendar = ({ tasks, onMonthClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getDayColor = (dayEvents) => {
    if (!dayEvents || dayEvents.length === 0) return "transparent";

    if (dayEvents.some((ev) => ev.priority?.toLowerCase() === "high"))
      return "#e98787ff";
    if (dayEvents.some((ev) => ev.priority?.toLowerCase() === "medium"))
      return "#f0cb8cff";
    if (dayEvents.some((ev) => ev.priority?.toLowerCase() === "low"))
      return "#8cedafff";

    return "#3b82f6";
  };

  useEffect(() => {
    setEvents(tasks || []);
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/tasks", {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  //       const data = await res.json();
  //       setEvents(data);
  //       console.log(data);
  //     } catch (err) {
  //       console.error("Error fetching tasks:", err);
  //     }
  //   };
  //   fetchTasks();
  // }, []);

  //trial
  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (!storedUser || !token) {
        console.warn("User not logged in or missing credentials");
        return;
      }
      const res = await fetch(
        `http://localhost:5000/api/tasks?user=${encodeURIComponent(storedUser.name)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      setEvents(data);
      console.log("Fetched user-specific tasks:", data);
    } catch (err) {
      console.error("Error fetching user tasks:", err);
    }
  };

  fetchTasks();
}, []);


  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) days.push({ date: null });
  for (let d = 1; d <= daysInMonth; d++)
    days.push({ date: new Date(year, month, d) });

  const isSameDay = (dateString, d2) => {
    if (!dateString || !d2) return false;
    const d1 = new Date(dateString);
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const handleShowMore = (dayEvents) => {
    setSelectedEvents(dayEvents);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvents([]);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getPriorityColor = (priority) => {
    switch ((priority || "").toLowerCase()) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#f59e0b";
      case "low":
        return "#22c55e";
      default:
        return "#3b82f6";
    }
  };

  const handleMarkComplete = async (ev) => {
    try {
      await axios.put(`http://localhost:5000/events/${ev.task_id}`, {
        is_completed: true,
      });

      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.task_id === ev.task_id
            ? { ...event, is_completed: true }
            : event
        )
      );

      setSelectedEvents((prevSelected) =>
        prevSelected.map((event) =>
          event.task_id === ev.task_id
            ? { ...event, is_completed: true }
            : event
        )
      );

      console.log(ev.task_id);
      alert("Event marked as completed!");
    } catch (error) {
      console.error("Error updating event status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header" onClick={onMonthClick}>
        <button onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}>
          Prev
        </button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}>
          Next
        </button>
      </div>

      <div className="calendar-weekdays">
        {weekDays.map((d) => (
          <div key={d} className="calendar-weekday">
            {d}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((d, idx) => {
          const dayEvents = d.date
            ? events.filter((ev) => !ev.is_completed && isSameDay(ev.deadline, d.date))
            : [];

          return (
            <div
              key={idx}
              className={`calendar-cell ${d.date ? "" : "empty"}`}
              style={{ backgroundColor: getDayColor(dayEvents) }}
            >
              <div className="day-number">{d.date ? d.date.getDate() : ""}</div>
              <div className="events">
                {dayEvents.slice(0, 1).map((ev, i) => (
                  <div
                    key={i}
                    className="event"
                    onClick={() => handleShowMore(dayEvents)}
                  >
                    <div className="event-title"></div>
                    <div className="event-time"></div>
                  </div>
                ))}

                {dayEvents.length > 0 && (
                  <button
                    className="more-events"
                    onClick={() => handleShowMore(dayEvents)}
                  >
                    {dayEvents.length} to done
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Tasks on this Day</h3>

            <div className="modal-scroll">
              {selectedEvents.map((ev, index) => (
                <div
                  key={index}
                  className="event-card"
                  style={{ borderLeftColor: getPriorityColor(ev.priority) }}
                >
                  <div className="event-header">
                    <h4>{ev.title}</h4>
                    <span
                      className="priority-tag"
                      style={{ background: getPriorityColor(ev.priority) }}
                    >
                      {ev.priority || "Normal"}
                    </span>
                  </div>
                  <p className="event-desc">
                    {ev.description || "No description provided."}
                  </p>
                  <div className="event-meta">
                    <p>
                      <strong>Due:</strong>{" "}
                      {new Date(ev.due_date).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Deadline:</strong>{" "}
                      {new Date(ev.deadline).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {ev.is_completed ? (
                        <span className="text-green-600 font-semibold">
                          Completed
                        </span>
                      ) : (
                        <span className="text-red-600 font-semibold">
                          Not Completed
                        </span>
                      )}
                    </p>

                    {!ev.is_completed && (
                      <button
                        onClick={() => handleMarkComplete(ev)}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button onClick={closeModal} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
