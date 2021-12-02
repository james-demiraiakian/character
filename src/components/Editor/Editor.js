import React from 'react';

import './Editor.css';

export default function Editor({
  head,
  setHead,
  body,
  setBody,
  legs,
  setLegs,
  phrase,
  setPhrase,
  setPhraseList,
  headCount,
  setHeadCount,
  bodyCount,
  setBodyCount,
  legsCount,
  setLegsCount,
}) {
  // const phrases = { phrase };
  const handlePhrase = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

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
    <div className="editor">
      <div className="form">
        <select value={head} onChange={handleHead}>
          <option value="head-1">Head 1</option>
          <option value="head-2">Head 2</option>
          <option value="head-3">Head 3</option>
        </select>
      </div>
      <div className="form">
        <select value={body} onChange={handleBody}>
          <option value="body-1">Body 1</option>
          <option value="body-2">Body 2</option>
          <option value="body-3">Body 3</option>
        </select>
      </div>
      <div className="form">
        <select value={legs} onChange={handleLegs}>
          <option value="legs-1">Legs 1</option>
          <option value="legs-2">Legs 2</option>
          <option value="legs-3">Legs 3</option>
        </select>
      </div>
      <div className="form">
        <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
        <label>Phrase</label>
        <button onClick={handlePhrase}>Save</button>
      </div>
      <div className="counter">
        <span className="head-count">Your head has changed {headCount} times</span>
        <span className="body-count">Your body has changed {bodyCount} times</span>
        <span className="legs-count">Your legs have changed {legsCount} times</span>
      </div>
    </div>
  );
}
