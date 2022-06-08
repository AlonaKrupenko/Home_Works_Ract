import React from "react";

class Progress extends React.Component {
  render() {
    const { value } = this.props;

    const progressBarStyle = {
      width: value + "%",
    };

    return (
      <div className="progress m-3">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
          style={progressBarStyle}
        ></div>
      </div>
    );
  }
}
Progress.defaultProps = {
  value: "0",
};

export default Progress;
