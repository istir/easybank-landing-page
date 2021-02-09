import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "./images/logo.svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMobile: false };
  }

  handleMenuClick() {
    this.setState({ showMobile: !this.state.showMobile });
  }
  hideMenu() {
    this.setState({ showMobile: false });
  }
  render() {
    return (
      <div className="toolbar background">
        <div className="toolbar table">
          <img className="clickable" src={Logo}></img>
          <div className="toolbar menu">
            <a className="text toolbar normal">Home</a>
            <a className="text toolbar normal">About</a>
            <a className="text toolbar normal">Contact</a>
            <a className="text toolbar normal">Blog</a>
            <a className="text toolbar normal">Careers</a>
          </div>
          <button className="filled">Request Invite</button>
          <button
            className="hamburgerMenu"
            onClick={this.handleMenuClick.bind(this)}
          >
            {/* <div> */}
            {this.state.showMobile ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
            {/* </div> */}
          </button>
        </div>
        <div
          onClick={this.hideMenu.bind(this)}
          onTouchStart={this.hideMenu.bind(this)}
          className={`mobile background ${
            this.state.showMobile ? "show" : "hide"
          }`}
        >
          <div className="mobile menu">
            {" "}
            <a className="text toolbar normal">Home</a>
            <a className="text toolbar normal">About</a>
            <a className="text toolbar normal">Contact</a>
            <a className="text toolbar normal">Blog</a>
            <a className="text toolbar normal">Careers</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Toolbar;
