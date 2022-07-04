import React from "react";
import cn from "classnames";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const modalClasses = cn("modal", {
      fade: this.props.isOpen ? true : false,
      show: this.props.isOpen ? true : false,
    });

    return (
      <div>
        <div
          className={modalClasses}
          style={{ display: this.props.isOpen ? "block" : "none" }}
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
