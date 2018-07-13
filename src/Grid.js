import React from 'react';
import dateFns from 'date-fns';
import './Grid.css';
import times from './constants/times';

const weekDays = [1, 2, 3, 4, 5];

class Grid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderDayColumn = this.renderDayColumn.bind(this);
  }

  renderDayTimes(date) {
    return times.map(([hour, minute]) => {
      const time = dateFns.setMinutes(dateFns.setHours(date, hour), minute);
      return (
        <div class="DayTime">{dateFns.format(time, 'HH:mm')}</div>
      );
    });
  }

  renderDayColumn(dayOfWeek) {
    const date = dateFns.setDay(this.props.weekStart, dayOfWeek);
    return (
      <div className="DayColumn">
        <div className="DayColumnHeader">{dateFns.format(date, 'MM/DD')}</div>
        <div className="DayColumnBody">{this.renderDayTimes(date)}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="Grid">
        {weekDays.map(this.renderDayColumn)}
      </div>
    );
  }
}

export default Grid;
