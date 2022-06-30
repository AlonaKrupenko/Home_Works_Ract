import React from "react";
import Text from "./Text";
import Body from "./Body";
import Title from "./Title";

class Card extends React.Component {
  static Text = Text;
  static Body = Body;
  static Title = Title;

  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

export default Card;
