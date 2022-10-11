import React from "react";
import logo from "./logo.svg";
import "./App.css";

function withUnderline(Component) {
  return (props) => {
    return (
      <Component
        {...props}
        style={{ textDecoration: "underline", color: "red" }}
      />
    );
  };
}

const Text = (props) => {
  return <h1 {...props}>I am a Text</h1>;
};

const TextWithUnderline = withUnderline(Text);

const Para = (props) => {
  return <p {...props}>I am Para</p>;
};

const MyPara = withUnderline(Para);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload!
        </p>
        <Para />
        <MyPara />
        <span className="App-link">Hello from codedamn :)</span>
        <Text />
        <TextWithUnderline />
      </header>
    </div>
  );
}

export default App;
