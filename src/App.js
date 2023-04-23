import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent.jsx';

export const AppContext = createContext({ count: 0, setCount: () => { } });

function App() {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{ count, setCount }}>
      <div className="App">
        <h2>{count}</h2>
        <ChildComponent />
      </div>
    </AppContext.Provider>
  );
}

export default App;
