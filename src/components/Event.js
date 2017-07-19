import React from 'react';

const Event = ({event: {start, duration, title, offset}}) => {
  const style = {
    top: start,
    height: duration,
    width: '200px',
    position: 'absolute',
    backgroundColor: '#E2ECF5',
    borderLeft: '2px solid #6E9ECF',
    left: offset * 200 + 'px',
    boxSizing: 'border-box',
  }

  return (
    <div className="event" style={style}>
      {title}
    </div>
  )
}

export default Event;
