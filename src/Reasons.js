import React from "react";
import iconOnline from "./images/icon-online.svg";
import mockups from "./images/image-mockups.png";
import ReasonElement from "./ReasonElement";

class Reasons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexbox">
        <div className="reasons text">
          <div className="header big">Why choose Easybank?</div>{" "}
          <div className="normalText">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.
          </div>
          <div className="reason list">
            <ReasonElement
              image={iconOnline}
              header="Online Banking"
              text="Lorem ipsum"
            />
            <ReasonElement
              image={iconOnline}
              header="Online Banking"
              text="Lorem ipsum"
            />
            <ReasonElement
              image={iconOnline}
              header="Online Banking"
              text="Lorem ipsum"
            />
            <ReasonElement
              image={iconOnline}
              header="Online Banking"
              text="Lorem ipsum"
            />
          </div>
          {/* <button style={{ marginTop: "20px" }} className="filled">
            Request Invite
          </button> */}
        </div>
        {/* <div className="intro background">
          <img className="intro background image" src={bg}></img>
          <img className="intro background mockup" src={mockups}></img>
        </div> */}
        {/* <div className="intro background">
        
        </div> */}
      </div>
    );
  }
}

export default Reasons;
