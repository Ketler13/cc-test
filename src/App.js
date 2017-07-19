import React, { Component } from 'react';

import Calendar from './components/Calendar';
import { events } from './fixtures';

class App extends Component {
  render() {
    return (
      <Calendar events={events} />
    );
  }
}

export default App;
