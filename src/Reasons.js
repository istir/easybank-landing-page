import React from "react";
import iconOnline from "./images/icon-online.svg";
import iconBudgeting from "./images/icon-budgeting.svg";
import iconOnboarding from "./images/icon-onboarding.svg";
import iconAPI from "./images/icon-api.svg";
import ReasonElement from "./ReasonElement";

class Reasons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexbox reasons">
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
              text="Our modern web and mobile applications allow you to
              keep track of your finances wherever you are in the world."
            />
            <ReasonElement
              image={iconBudgeting}
              header="Simple Budgeting"
              text="See exactly where your money goes each month. Receive notifications when
              you’re close to hitting your limits."
            />
            <ReasonElement
              image={iconOnboarding}
              header="Fast Onboarding"
              text="We don’t do branches.
              Open your account in minutes online and start taking control of your
              finances right away."
            />
            <ReasonElement
              image={iconAPI}
              header="Open API"
              text="Manage your savings, investments, pension, and
              much more from one account. Tracking your money has never been easier."
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
