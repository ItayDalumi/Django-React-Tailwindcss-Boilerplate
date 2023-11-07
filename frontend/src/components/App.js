import React from "react";
import ReactDOM from "react-dom";
import FetchData from "./FetchData";
import AddTask from "./AddTask";

const App = () => {
  return (
    <div>
      <div>
        hello world
        <FetchData/>
        <AddTask/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
