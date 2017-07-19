import React from 'react';

import Event from './Event';

import { addOffSet } from '../fixtures';

const Events = props => (
  <ul className="events">
    {
      addOffSet(props.events).map((event, i) => (
        <li key={i}>
          <Event event={event}/>
        </li>
      ))
    }
  </ul>
)

export default Events;
