import React from "react";
import bg from "./images/bg-intro-desktop.svg";
import mockups from "./images/image-mockups.png";
import Reasons from "./Reasons";
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexbox introBox">
        <div className="intro background">
          <img className="intro background image" src={bg}></img>
          <img className="intro background mockup" src={mockups}></img>
        </div>
        <div className="intro">
          <div className="header biggest">Next generation digital banking</div>{" "}
          <div className="text normal">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </div>
          <button style={{ marginTop: "20px" }} className="filled">
            Request Invite
          </button>
        </div>

        {/* <Reasons /> */}
        {/* <div className="intro background">
        
        </div> */}
      </div>
    );
  }
}

export default Intro;
