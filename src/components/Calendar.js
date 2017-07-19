import React, { Component } from 'react';
import Event from './Event';
import Grid from './Grid';

import { addOffSet } from '../fixtures';

class Calendar extends Component {

  render() {
    const events = addOffSet(this.props.events).map((event, i) => (
      <li key={i}>
        <Event event={event}/>
      </li>
    ))
    return (
      <div className="calendar">
        <Grid />
        <ul className="events">
          {events}
        </ul>
      </div>
    )
  }
}

export default Calendar;
