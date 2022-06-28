import React from "react";
import BtnList from "./BtnList";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      logList: [],
    };
  }

  handleClick = (btnType) => () => {
    const updatedValue =
      btnType === "increase" ? this.state.value + 1 : this.state.value - 1;

    this.setState({
      value: updatedValue,
      logList: [updatedValue, ...this.state.logList],
    });
  };

  deleteItem = (event) => {
    const currentLogList = [...this.state.logList];
    const resultArr = currentLogList.filter((el, index) => {
      return index !== +event.target.dataset.id;
    });
    this.setState({ logList: resultArr });
  };

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            onClick={this.handleClick("increase")}
            type="button"
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={this.handleClick("decrease")}
            type="button"
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>

        <BtnList btnsArr={this.state.logList} deleteBtn={this.deleteItem} />
      </div>
    );
  }
}

export default Component;
