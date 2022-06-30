import React from "react";
import _ from "lodash";
import Item from "./Item";

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todoList: [] };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleRemove = (id) => {
    const actualTodoList = _.cloneDeep(this.state.todoList);
    const resultTodoList = actualTodoList.filter((el) => {
      return id !== el.id;
    });
    this.setState({ todoList: resultTodoList });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const element = { id: _.uniqueId(), text: this.state.value };
    const actualTodoList = [element, ...this.state.todoList];
    this.setState({ value: "", todoList: actualTodoList });
  };

  render() {
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input
                type="text"
                onChange={this.handleChange}
                required=""
                className="form-control"
                placeholder="I am going..."
                value={this.state.value}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        <div>
          {this.state.todoList.map((el, index) => {
            return (
              <Item task={el} onRemove={this.handleRemove} key={_.uniqueId()} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoBox;
