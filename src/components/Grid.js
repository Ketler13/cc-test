import React from 'react';
import { gridData } from '../fixtures';

const Grid = () => (
    <ul className="grid">
    {
      gridData.map((data, i) => {
        const style = {
          width: '100%',
          position: 'absolute',
          borderTop: (i === (gridData.length - 1) || (i % 2)) ? 'none' : 'solid 1px grey',
          top: data.top,
        }
        return (
          <li
            key={i} className={(i % 2) ? 'grid-item grid-small' : 'grid-item grid-big'}
            style={style}
          >
            <div className="grid-value">{data.value}</div>
          </li>
        )
      })
    }
  </ul>
);

export default Grid;
