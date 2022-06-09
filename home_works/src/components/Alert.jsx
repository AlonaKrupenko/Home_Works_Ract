import React from "react";

class Alert extends React.Component {
  render() {
    const alertType = this.props.type;

    function checkAlertType(alertTypeAtt) {
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

      return possibleTypes.includes(alertTypeAtt) ? alertTypeAtt : "light";
    }

    const fullClasses = "alert alert-" + checkAlertType(alertType);

    return (
      <div className={fullClasses} role="alert">
        {this.props.text}
      </div>
    );
  }
}

Alert.defaultProps = {
  text: "Hello",
};

export default Alert;
