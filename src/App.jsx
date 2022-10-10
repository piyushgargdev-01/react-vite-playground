import React, { useState } from "react";
import SocketService from "./socket";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState(1);
  const socket = new SocketService();

  return (
    <div className="App">
      <button onClick={(e) => setState((s) => s + 1)}>{state}</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload!
        </p>

        <span className="App-link">Hello from codedamn :)</span>
      </header>
    </div>
  );
}

export default App;
