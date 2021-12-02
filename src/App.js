import React, { useState } from 'react';

import './App.css';

import Editor from './components/Editor/Editor';
import Display from './components/Display/Display';
import Counter from './components/Counter/Counter';

function App() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [legs, setLegs] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [bodyCount, setBodyCount] = useState('');
  const [legsCount, setLegsCount] = useState('');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <div className="App">
      <Editor
        {...{ head, setHead, body, setBody, legs, setLegs, phrase, setPhrase, setPhraseList }}
      />
      {/* <Counter {...{ headCount, setHeadCount, bodyCount, setBodyCount, legsCount, setLegsCount }} /> */}
      <Display {...{ head, body, legs, phrase }} />
      <div>
        Current List of Phrases:
        {phraseList.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
