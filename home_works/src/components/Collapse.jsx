import React from "react";
import cn from "classnames";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.opened,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: this.state.isOpen === "true" ? "false" : "true" });
  };

  render() {
    const collapsebleDivClasses = cn("collapse", {
      show: this.state.isOpen === "true",
    });

    return (
      <div>
        <p>
          <a
            onClick={this.handleClick}
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={this.state.isOpen}
          >
            Link with href
          </a>
        </p>
        <div className={collapsebleDivClasses}>
          <div className="card card-body">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  text: "Hello World!",
  opened: "true",
};

export default Collapse;
