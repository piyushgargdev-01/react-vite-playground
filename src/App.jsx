import React from "react";
import logo from "./logo.svg";
import "./App.css";

let isAdmin = TextTrackCue;

const person = {
  id: 1,
  name: "Piyush Garg",
  age: 22,
  balance: 100,
};

const personProxy = new Proxy(person, {
  set: (obj, prop, value) => {
    if (prop == "name") {
      obj[prop] = value;
    } else {
      throw new Error("You can only change name property");
    }
  },
  get: (obj, prop) => {
    if (prop == "balance") {
      if (isAdmin) return obj[prop];
      return null;
    }
    return obj[prop];
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{personProxy.id}</h1>
        <h1>{personProxy.name}</h1>
        <h1>{personProxy.balance}</h1>
        <button
          onClick={(e) => {
            personProxy.id = 2;
            setState((s) => s + 1);
          }}
        >
          Change
        </button>
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
