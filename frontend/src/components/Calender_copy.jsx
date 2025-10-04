import React, { useEffect, useState } from "react";
import "../styles/calender_copy.css";
import { Link } from "react-router-dom";

const Calender_copy = ({ tasks }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(tasks || []);
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tasks", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
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

  // Build days array for calendar grid
  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push({ date: null });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ date: new Date(year, month, d) });
  }

  const isSameDay = (dateString, d2) => {
    if (!dateString || !d2) return false;
    const d1 = new Date(dateString); // works with "YYYY-MM-DD"
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
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

      {/* Weekdays */}
      <div className="calendar-weekdays">
        {weekDays.map((d) => (
          <div key={d} className="calendar-weekday">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid">
        {days.map((d, idx) => {
          const dayEvents = d.date
            ? events.filter((ev) => isSameDay(ev.deadline, d.date))
            : [];

          return (
            <div key={idx} className={`calendar-cell ${d.date ? "" : "empty"}`}>
              <div className="day-number">{d.date ? d.date.getDate() : ""}</div>

              <div className="events">
                {dayEvents.slice(0, 1).map((ev, i) => (
                  <div key={i} className="event">
                    <div className="event-title">{ev.title}</div>
                    <div className="event-time">
                      {new Date(ev.due_date).toDateString()}
                    </div>
                  </div>
                ))}
                {dayEvents.length > 1 && (
                  <button className="more-events">
                    +{dayEvents.length - 1} more
                  </button>
                )}
              </div>

              {/* Example: show add link */}
              {/* {d.date && (
                <Link to="/task">
                  <button className="add-event">+ Add</button>
                </Link>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calender_copy;