import React from "react";
import Logo from "./images/logo.svg";
import fb from "./images/icon-facebook.svg";
import yt from "./images/icon-youtube.svg";
import tt from "./images/icon-twitter.svg";
import pi from "./images/icon-pinterest.svg";
import ig from "./images/icon-instagram.svg";
class Foot extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="foot background">
        <div className="foot logos">
          {/* <div style={{ display: "grid", gridTemplateRows: "4rem" }}> */}
          <img
            style={{ gridRow: 1, filter: "brightness(30)" }}
            src={Logo}
          ></img>
          <div className="foot icons">
            <img className="clickable" src={fb}></img>
            <img className="clickable" src={yt}></img>
            <img className="clickable" src={tt}></img>
            <img className="clickable" src={pi}></img>
            <img className="clickable" src={ig}></img>
          </div>
          {/* </div> */}
        </div>

        <div className="foot options">
          <a className="foot text normal">About Us</a>
          <a className="foot text normal">Careers</a>
          <a className="foot text normal">Contact</a>
          <a className="foot text normal">Support</a>
          <a className="foot text normal">Blog</a>
          <a className="foot text normal">Privacy Policy</a>
        </div>
        <div className="foot invite">
          <button style={{ marginTop: "20px" }} className="filled">
            Request Invite
          </button>
          <div className="foot text smaller">
            © Easybank. All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}

export default Foot;
