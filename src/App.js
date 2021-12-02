import React from 'react';

import './App.css';

import Editor from './components/Editor/Editor';
import Display from './components/Display/Display';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Editor />
      <Counter />
      <Display />
    </div>
  );
}

export default App;
