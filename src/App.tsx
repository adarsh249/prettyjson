import React, { useState } from 'react';
import './App.css';
import JsonInput from './components/jsonInput'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>JSON PrettyBorderless</h1>
      <JsonInput />
    </div>
  );
}

export default App;
