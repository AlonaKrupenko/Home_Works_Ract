import React from "react";

class ResultTable extends React.Component {
  render() {
    const tableKeys = Object.keys(this.props.data)
      .filter((el) => el !== "isSubmitted")
      .sort((a, b) => {
        if (a > b) {
          return 1;
        } else if (a === b) {
          return 0;
        } else {
          return -1;
        }
      });

    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.onClickBack}
        >
          Back
        </button>
        <table className="table">
          <tbody>
            {tableKeys.map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{this.props.data[key].toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ResultTable;
