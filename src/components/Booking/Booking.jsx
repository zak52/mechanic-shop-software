import React from 'react';
import './Booking.css';
import WeekView from './WeekView.jsx';
import DayView from './DayView';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentView: 'month',
      selectedDay: null
    };
  }

  goToPrevMonth = () => {
    this.setState(prevState => {
      const newYear = prevState.currentMonth === 0 ? prevState.currentYear - 1 : prevState.currentYear;
      const newMonth = prevState.currentMonth === 0 ? 11 : prevState.currentMonth - 1;
      return { currentMonth: newMonth, currentYear: newYear };
    });
  }

  goToNextMonth = () => {
    this.setState(prevState => {
      const newYear = prevState.currentMonth === 11 ? prevState.currentYear + 1 : prevState.currentYear;
      const newMonth = prevState.currentMonth === 11 ? 0 : prevState.currentMonth + 1;
      return { currentMonth: newMonth, currentYear: newYear };
    });
  }

  switchView = (view) => {
    this.setState({ currentView: view });
  }

  selectDay = (day) => {
    this.setState({ selectedDay: day, currentView: 'day' });
  }

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let calendarContent;
    if (this.state.currentView === 'month') {
      // Generate the calendar grid for the month view

      // Get the first day of the month
      const firstDay = new Date(this.state.currentYear, this.state.currentMonth, 1);
      // Get the number of days in the month
      const numDays = new Date(this.state.currentYear, this.state.currentMonth + 1, 0).getDate();

      const firstDayIndex = firstDay.getDay();
      // Get the index of the last day of the month (0-6)
      const lastDayIndex = new Date(this.state.currentYear, this.state.currentMonth, numDays).getDay();

      // Create an array for the calendar grid
      const calendar = [];

      // Add empty cells for the first week
      for (let i = 0; i < firstDayIndex; i++) {
        calendar.push(<td key={`empty-${i}`}></td>);
      }

      // Add the days of the month
      for (let i = 1; i <= numDays; i++) {
        let className = '';
        if (i === new Date().getDate() && this.state.currentMonth === new Date().getMonth() && this.state.currentYear === new Date().getFullYear()) {
          className = 'today';
        }
        if (i === this.state.selectedDay) {
          className = 'selected';
        }
        calendar.push(<td key={i} className={className} onClick={() => this.selectDay(i)}>{i}</td>);
      }

      // Add empty cells for the last week
      for (let i = lastDayIndex + 1; i < 7; i++) {
        calendar.push(<td key={`empty-${i}`}></td>);
      }

      // Create rows for the calendar grid
      const calendarRows = [];
      for (let i = 0; i < calendar.length / 7; i++) {
        calendarRows.push(<tr key={i}>{calendar.slice(i * 7, i * 7 + 7)}</tr>);
      }

      calendarContent = (
        <div className="calendar">
            <div className="calendar-nav">
                <button onClick={this.goToPrevMonth}>&lt;</button>
                {months[this.state.currentMonth]} {this.state.currentYear}
                <button onClick={this.goToNextMonth}>&gt;</button>
              </div>
          <table>
            <thead>
              <tr className='days_of_Week' >
                {daysOfWeek.map((day) => <th key={day}>{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {calendarRows}
            </tbody>
          </table>
          </div>
      );
    } else if (this.state.currentView === 'week') {
      // Generate the calendar grid for the week view

      // Get the current day of the week
      const currentDay = new Date().getDay();


      calendarContent = (
        <WeekView/>
      );
    } else if (this.state.currentView === 'day') {
      // Generate the calendar grid for the day view

      // Get the current day of the week
      const currentDay = new Date().getDay();
      // Create an array for the calendar grid
      const calendar = [];
      // Add the current day of the week
      calendar.push(<td key={currentDay}>{daysOfWeek[currentDay]}</td>);
      calendarContent = (
        <DayView/>
      );
    }

    return (
      <div className="fullcalendar">
          <div className="calendar-view-buttons">
            <button onClick={() => this.switchView('month')}>Month</button>
            <button onClick={() => this.switchView('week')}>Week</button>
            <button onClick={() => this.switchView('day')}>Day</button>
          </div>
        {calendarContent}
      </div>
    );
  }
}

export default Booking;
