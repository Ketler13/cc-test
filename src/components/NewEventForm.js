import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addEvent } from '../AC';

class NewEventForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      start: '0',
      duration: '0'
    };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.type === 'text' ? ev.target.value : +ev.target.value
    });
  }

  add() {
    this.props.addEvent(this.state);
  }

  render() {
    const {title, start, duration} = this.state;
    return (
      <div className="new-event-form">
        <input type="text" name="title" value={title} onChange={this.handleChange}></input>
        <input type="number" name="start" value={start} onChange={this.handleChange}></input>
        <input type="number" name="duration" value={duration} onChange={this.handleChange}></input>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default connect(null, {addEvent})(NewEventForm);
