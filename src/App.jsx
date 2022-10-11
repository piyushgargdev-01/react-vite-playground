import React from "react";
import logo from "./logo.svg";
import "./App.css";

const animalFun = {
  walk: () => <p>Walking...</p>,
  sleep: () => <p>Sleeping..</p>,
};

const dogFn = {
  bark: () => <p>Barking...</p>,
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Lion {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(dogFn, animalFun);
Object.assign(Dog.prototype, dogFn);
Object.assign(Lion.prototype, animalFun);

const tuffy = new Dog("Tuffy");

function App() {
  return (
    <div className="App">
      {tuffy.bark()}
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
