import React, { Component } from 'react';
import { connect } from 'react-redux';

import Events from './Events';
import Grid from './Grid';
import NewEventForm from './NewEventForm';


class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <NewEventForm />
        <Grid />
        <Events events={this.props.events} />
      </div>
    )
  }
}

export default connect(
  state => ({events: state.events})
)(Calendar);
