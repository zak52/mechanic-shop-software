import React, { useState } from 'react';
import './WeekView.css'

const WeekView = () => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());

  function getCurrentWeek() {
    const currentDate = new Date();
    const currentWeek = [];
    let weekStart = currentDate;

    // Set the weekStart to the previous Sunday
    while (weekStart.getDay() !== 0) {
      weekStart.setDate(weekStart.getDate() - 1);
    }

    // Add the days of the current week to the currentWeek array
    for (let i = 0; i < 7; i++) {
      currentWeek.push(new Date(weekStart));
      weekStart.setDate(weekStart.getDate() + 1);
    }

    return currentWeek;
  }

  function getNextWeek() {
    const nextWeek = [];
    let weekStart = currentWeek[6];

    // Set the weekStart to the following Sunday
    weekStart.setDate(weekStart.getDate() + 1);

    // Add the days of the next week to the nextWeek array
    for (let i = 0; i < 7; i++) {
      nextWeek.push(new Date(weekStart));
      weekStart.setDate(weekStart.getDate() + 1);
    }

    return nextWeek;
  }

  function getPreviousWeek() {
    const previousWeek = [];
    let weekStart = currentWeek[0];

    // Set the weekStart to the previous Sunday
    weekStart.setDate(weekStart.getDate() - 7);

    // Add the days of the previous week to the previousWeek array
    for (let i = 0; i < 7; i++) {
      previousWeek.push(new Date(weekStart));
      weekStart.setDate(weekStart.getDate() + 1);
    }

    return previousWeek;
  }

  return (
    <div className="week-view">
      <div className="week-view__buttons">
        <button onClick={() => setCurrentWeek(getPreviousWeek())}>Previous Week</button>
        <button onClick={() => setCurrentWeek(getNextWeek())}>Next Week</button>
      </div>
      <div className="week-view__dates">
              {`${currentWeek[0].toLocaleDateString()} - ${currentWeek[6].toLocaleDateString()}`}
      </div>
      <table>
        <thead>
          <tr>
            {weekDays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {currentWeek.map((day) => (
              <td key={day}>
                {day.getDate()}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
  );
};

export default WeekView;