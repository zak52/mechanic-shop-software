import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DayView.css';

function Day() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://my-api/schedule?date=' + date.toISOString()
      );
      setSchedule(result.data);
    }
    fetchData();
  }, [date]);

  const previousDay = () => {
    setDate(new Date(date.getTime() - 86400000));
  };

  const nextDay = () => {
    setDate(new Date(date.getTime() + 86400000));
  };

  return (
    <div className="day">
        <div className="day__navigation">
            <button onClick={previousDay}>Previous Day</button>
            <button onClick={nextDay}>Next Day</button>
        </div>
        <div className="day__date">
            {date.toLocaleString('default', { month: 'long' })} {date.getDate()}
        </div>
        <div className="day__day-of-week">
            {date.toLocaleString('default', { weekday: 'long' })}
        </div>
    </div>
  );
}

export default Day;
