import "./App.css";
import React from "react";
import Intro from "./Intro";
import Reasons from "./Reasons";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="parent">
        <Intro />
        <Reasons />
      </div>
    );
  }
}

export default App;
