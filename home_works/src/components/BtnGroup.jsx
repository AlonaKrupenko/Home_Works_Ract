import React from "react";
import cn from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "false",
    };
  }

  handleClick = (type) => () => {
    this.setState({ active: type });
  };

  render() {
    const leftBtnClasses = cn("btn", "btn-secondary", "left", {
      active: this.state.active === "left",
    });

    const rightBtnClasses = cn("btn", "btn-secondary", "right", {
      active: this.state.active === "right",
    });

    return (
      <div className="btn-group" role="group">
        <button
          onClick={this.handleClick("left")}
          type="button"
          className={leftBtnClasses}
        >
          Left
        </button>

        <button
          onClick={this.handleClick("right")}
          type="button"
          className={rightBtnClasses}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
