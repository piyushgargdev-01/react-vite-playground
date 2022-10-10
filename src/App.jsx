import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";
import { useStore } from "./useStore";

const Text = () => {
  const count = useStore(-1);

  return <h1>{count}</h1>;
};

const Text2 = () => {
  const count = useStore(-1);

  return <p>{count}</p>;
};

function App() {
  return (
    <div className="App">
      <button onClick={(e) => store.increment()}>Increment the count</button>
      <header className="App-header">
        <Text />
        <Text2 />
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
