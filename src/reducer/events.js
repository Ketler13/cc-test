import { events } from '../fixtures';

export default (state = events, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_EVENT':
      return state.concat(payload).sort((a, b) => a.start - b.start);

    default :
      return state;
  }
}
