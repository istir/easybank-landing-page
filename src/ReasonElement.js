import React from "react";
class ReasonElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="reason element">
        <img src={this.props.image}></img>
        <div className="header medium">{this.props.header}</div>
        <div className="text small">{this.props.text}</div>
      </div>
    );
  }
}
export default ReasonElement;
