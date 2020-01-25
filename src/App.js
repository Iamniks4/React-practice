import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = (props) => {
  const [ userState, setUser ] = useState({
    userName: ''
  })
  const nameChanged = (event) => {
    setUser({
      userName: event.target.value
    })
  }
  return (
    <div className="App">
      <UserInput changed={nameChanged}/>
      <UserOutput userName={userState.userName}/>
    </div>
  );
}

export default App;
