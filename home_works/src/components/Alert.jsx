import React from "react";

class Alert extends React.Component {
  render() {
    const possibleTypes = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];

    const alertType = this.props.type;

    const resultType = possibleTypes.includes(alertType) ? alertType : "danger";
    const fullClasses = "alert alert-" + resultType;

    return (
      <div className={fullClasses} role="alert">
        {this.props.text}
      </div>
    );
  }
}

Alert.defaultProps = {
  text: "Hello",
  // type: "light",
};

export default Alert;
