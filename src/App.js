import React from 'react';
import dateFns from 'date-fns';
import Toolbar from './Toolbar';
import Grid from './Grid';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      weekStart: this.getWeekStart(),
      timeTracking: [],
    };

    this.onChangeWeekStart = this.onChangeWeekStart.bind(this);
  }

  getWeekStart(date = new Date()) {
    return dateFns.startOfWeek(date, { weekStartsOn: 1 });
  }

  onChangeWeekStart(date) {
    this.setState({
      weekStart: this.getWeekStart(date),
    });
  }

  render() {
    const {
      weekStart,
      timeTracking,
    } = this.state;

    return (
      <div className="App">
        <Toolbar
          weekStart={weekStart}
          onChangeWeekStart={this.onChangeWeekStart}
        />
        <Grid
          weekStart={weekStart}
          timeTracking={timeTracking}
        />
      </div>
    );
  }
}

export default App;
