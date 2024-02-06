import './App.css';
import JsonInput from './components/jsonInput';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>JSON Pretty Borderless</h1>
      <div className="json-input">
        <JsonInput />
      </div>
    </div>
  );
}

export default App;
