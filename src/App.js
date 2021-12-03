import React, { useState } from 'react';

import './App.css';

import Editor from './components/Editor/Editor';
import Display from './components/Display/Display';

function App() {
  const [head, setHead] = useState('placeholder');
  const [body, setBody] = useState('placeholder');
  const [legs, setLegs] = useState('placeholder');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <div className="App">
      <Editor
        {...{
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
        }}
      />
      <Display {...{ head, body, legs }} />
      <div className="phrases">
        Current List of Phrases:
        {phraseList.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
