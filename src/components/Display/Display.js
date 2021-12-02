import React from 'react';

import './Display.css';

export default function Display({ head, body, legs }) {
  return (
    <div className="display">
      <div>
        <img className="head" src={`${process.env.PUBLIC_URL}/images/${head}.png`} />
      </div>
      <div>
        <img className="body" src={`${process.env.PUBLIC_URL}/images/${body}.png`} />
      </div>
      <div>
        <img className="legs" src={`${process.env.PUBLIC_URL}/images/${legs}.png`} />
      </div>
    </div>
  );
}
