import React, {useEffect} from 'react';
import './App.css';
import JsonInput from './components/jsonInput'

const App: React.FC = () => {
  useEffect(() => {
    document.title = "JSON Pretty Borderless";
  }, []);
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
