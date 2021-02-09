import React from "react";
import Logo from "./images/logo.svg";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="toolbar background">
        <div className="toolbar table">
          <img src={Logo}></img>
          <div className="toolbar menu">
            <a className="text toolbar normal">Home</a>
            <a className="text toolbar normal">About</a>
            <a className="text toolbar normal">Contact</a>
            <a className="text toolbar normal">Blog</a>
            <a className="text toolbar normal">Careers</a>
          </div>
          <button className="filled">Request Invite</button>
        </div>
      </div>
    );
  }
}
export default Toolbar;
