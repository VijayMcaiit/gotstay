import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Message from './Component/Message';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="vijay"/> */}
      {/* <Greet name="praveen"/> */}
      {/* <Greet name="ayush"/> */}
      {/* <Welcome name="vijay kumar"/> */}
      {/* <Message /> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
