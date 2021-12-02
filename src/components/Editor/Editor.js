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
}) {
  const phrases = { phrase };
  const handlePhrase = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

  return (
    <div className="editor">
      <div className="form">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="head-1">Head 1</option>
          <option value="head-2">Head 2</option>
          <option value="head-3">Head 3</option>
        </select>
      </div>
      <div className="form">
        <select value={body} onChange={(e) => setBody(e.target.value)}>
          <option value="body-1">Body 1</option>
          <option value="body-2">Body 2</option>
          <option value="body-3">Body 3</option>
        </select>
      </div>
      <div className="form">
        <select value={legs} onChange={(e) => setLegs(e.target.value)}>
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
    </div>
  );
}
