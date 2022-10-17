import React from "react";
import logo from "./logo.svg";

import Select from "./components/Select";
import Option from "./components/Option";

function App() {
  return (
    <div className="App">
      <Select value="C++">
        <Option value="JS" text="JavaScript" />
        <Option value="JS" text="JavaScript" />
        <Option value="Cpp" text="C++" />
        <Option value="HTML" text="HTML" />
        <Option value="CSS" text="CSS" />
        <Option value="JAVA" text="JAVA" />
      </Select>

      <Select value="HP">
        <Option value="MAc" text="Macbook" />
        <Option value="HP" text="HP" />
        <Option value="Lenovo" text="Lenovo" />
      </Select>
    </div>
  );
}

export default App;
