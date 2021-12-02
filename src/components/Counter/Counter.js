import React from 'react';

import './Counter.css';

export default function Counter({
  setHead,
  setHeadCount,
  setBody,
  setBodyCount,
  setLegs,
  setLegsCount,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
    setBodyCount((prevState) => prevState + 1);
  };

  const handleLegs = (e) => {
    setLegs(e.target.value);
    setLegsCount((prevState) => prevState + 1);
  };

  return (
    <div className="counter">
      <span className="headCount"></span>
    </div>
  );
}
