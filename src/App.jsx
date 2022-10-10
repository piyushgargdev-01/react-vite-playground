import React from "react";
import logo from "./logo.svg";
import "./App.css";

const userFactory = ({ fname, lname, age }) => ({
  firstName: fname,
  lastName: lname,
  age,
  fullName() {
    return `${fname} ${lname}`;
  },
  isEligibleToVote() {
    return `${age >= 18}`;
  },
});

const piyush = userFactory({ fname: "Piyush", lname: "Garg", age: 22 });

const mehul = userFactory({ fname: "Mehul", lname: "Mohan", age: 23 });

const jhon = userFactory({ fname: "Jhon", lname: "Doe", age: 30 });

const users = [piyush, mehul, jhon];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload!
        </p>

        {users.map((user) => (
          <li>
            {user.fullName()} - Can they vote {user.isEligibleToVote()}
          </li>
        ))}
        <span className="App-link">Hello from codedamn :)</span>
      </header>
    </div>
  );
}

export default App;
