import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dog from "./dog";

const tuffy = new Dog("Tuffy");

function App() {
  return (
    <div className="App">
      {tuffy.sleep()}
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
