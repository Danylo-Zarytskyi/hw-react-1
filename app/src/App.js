import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const url = 'https://swapi.dev/api/people/1/';
  const [ data, setData ] = useState('');
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      const resDataName = (response.data.name);
      setData(resDataName);
    }
    getData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { data ? data : 'loading' }
      </header>
    </div>
  );
}

export default App;
