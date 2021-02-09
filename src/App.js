import "./App.css";
import React from "react";
import Intro from "./Intro";
import Reasons from "./Reasons";
import Articles from "./Articles";
import Foot from "./Foot";
import Toolbar from "./Toolbar";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="parent">
        <Toolbar />
        <Intro />
        <Reasons />
        <Articles />
        <Foot />
      </div>
    );
  }
}

export default App;
