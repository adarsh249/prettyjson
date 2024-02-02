import React, { useState } from 'react';
import './App.css';
import JsonInput from './components/jsonInput'
import JsonOutput from './components/jsonOutput';

const App: React.FC = () => {
  const [formattedJSON, setFormattedJSON] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');
  return (
    <div className="App">
      <h1>JSON Pretty Borderless</h1>
      <JsonInput />
      <JsonOutput formattedJSON={formattedJSON}/>
    </div>
  );
}

export default App;
