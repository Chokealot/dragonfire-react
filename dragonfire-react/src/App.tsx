import React, { createRef, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';


function App() {
  return (
    <div className="App">
      <Menubar />
      <img ref={useRef("/assets/SmartCraft_Logo.jpg")} />
    </div>
  );
}

export default App;
