import React from "react";
import ArticleElement from "./ArticleElement";
import imageMoney from "./images/image-currency.jpg";
import imageFood from "./images/image-restaurant.jpg";
import imagePlane from "./images/image-plane.jpg";
import imageConfetti from "./images/image-confetti.jpg";
class Articles extends React.Component {
  render() {
    return (
      <div className="flexbox article">
        <div className="article text">
          <div className="header big">Latest Articles</div>{" "}
          <div className="article list">
            <ArticleElement
              image={imageMoney}
              author="By Claire Robinson"
              header="Receive money in any currency with no
              fees"
              text="The world is getting smaller and we’re becoming more mobile. So why
              should you be forced to only receive money in a single …"
            />
            <ArticleElement
              image={imageFood}
              author="By Wilson Hutton"
              header="Treat yourself without worrying about money"
              text="Our simple budgeting feature
              allows you to separate out your spending and set realistic limits each
              month. That means you …"
            />
            <ArticleElement
              image={imagePlane}
              author="By Wilson Hutton"
              header="Take your Easybank card wherever
              you go"
              text="We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …"
            />
            <ArticleElement
              image={imageConfetti}
              author="By Claire
              Robinson"
              header="Our invite-only Beta accounts are now live! "
              text="After a lot of hard
              work by the whole team, we’re excited to launch our closed beta. It’s easy
              to request an invite through the site …"
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

export default Articles;
