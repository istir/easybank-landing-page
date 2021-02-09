import React from "react";
class ArticleElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="article element">
        <img src={this.props.image}></img>
        <div className="text verysmall">{this.props.author}</div>
        <div className="header medium">{this.props.header}</div>
        <div className="text smaller">{this.props.text}</div>
      </div>
    );
  }
}
export default ArticleElement;
