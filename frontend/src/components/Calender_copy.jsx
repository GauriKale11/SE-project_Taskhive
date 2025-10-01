import React, { useState } from "react";
import "../styles/calender_copy.css";
import { Link } from "react-router-dom";

const Calender_copy = ({ tasks }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([
    { date: new Date(2025, 9, 3), title: "Meeting A", time: "10:00 - 11:30" },
    { date: new Date(2025, 9, 3), title: "Review Call", time: "2:00 - 3:00" },
    { date: new Date(2025, 9, 7), title: "Project Deadline", time: "All Day" },
  ]);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push({ date: null });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ date: new Date(year, month, d) });
  }

  if (tasks.length === 0) {
    console.log("No task");
  } else {
    console.log(tasks);
  }

  //   const addEvent = (day) => {
  //     const newEvent = { date: day, title: "New Event", time: "4:00 - 5:00" };
  //     setEvents((prev) => [...prev, newEvent]);
  //   };

  const isSameDay = (d1, d2) =>
    d1 &&
    d2 &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

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
            ? events.filter((ev) => isSameDay(ev.date, d.date))
            : [];
          return (
            <div key={idx} className={`calendar-cell ${d.date ? "" : "empty"}`}>
              <div className="day-number">{d.date ? d.date.getDate() : ""}</div>
              <div className="events">
                {dayEvents.slice(0, 1).map((ev, i) => (
                  <div key={i} className="event">
                    <div className="event-title">{ev.title}</div>
                    <div className="event-time">{ev.time}</div>
                  </div>
                ))}
                {dayEvents.length > 1 && (
                  <button className="more-events">
                    +{dayEvents.length - 1} more
                  </button>
                )}
              </div>

              {/* {d.date && (
                <Link to='/task'>
                    <button className="add-event">
                    + Add
                    </button>
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
