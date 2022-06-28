import React from "react";

class BtnList extends React.Component {
  render() {
    const { btnsArr } = this.props;

    return (
      <div className="list-group">
        {btnsArr.map((el, index) => {
          return (
            <button
              key={index}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={this.props.deleteBtn}
              data-id={index}
            >
              {el}
            </button>
          );
        })}
      </div>
    );
  }
}

export default BtnList;
