import React from "react";

class Item extends React.Component {
  handleRemoveClick = () => {
    this.props.onRemove(this.props.task.id);
  };
  render() {
    return (
      <div className="row">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handleRemoveClick}
          >
            -
          </button>
        </div>
        <div className="col">{this.props.task.text}</div>
        <hr />
      </div>
    );
  }
}

export default Item;
