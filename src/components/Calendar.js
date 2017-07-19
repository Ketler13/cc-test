import React, { Component } from 'react';
import { connect } from 'react-redux';

import Event from './Event';
import Grid from './Grid';
import NewEventForm from './NewEventForm';

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
        <NewEventForm />
        <Grid />
        <ul className="events">
          {events}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({events: state.events})
)(Calendar);
