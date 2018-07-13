import React from 'react';
import dateFns from 'date-fns';
import './Toolbar.css';

class Toolbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onPreviousWeek = this.onPreviousWeek.bind(this);
    this.onNextWeek = this.onNextWeek.bind(this);
  }

  onPreviousWeek() {
    this.props.onChangeWeekStart(
      dateFns.subWeeks(this.props.weekStart, 1),
    );
  }

  onNextWeek() {
    this.props.onChangeWeekStart(
      dateFns.addWeeks(this.props.weekStart, 1),
    );
  }

  renderDate() {
    const date = dateFns.format(this.props.weekStart, 'MM/DD');
    return (
      <div>
        {date}
      </div>
    );
  }

  render() {
    return (
      <div className="Toolbar">
        <button onClick={this.onPreviousWeek}>{"<"}</button>
        {this.renderDate()}
        <button onClick={this.onNextWeek}>{">"}</button>
      </div>
    );
  }
}

export default Toolbar;
