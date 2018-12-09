const React = require("react");

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }

  render() {
    return (
      <div id="controls">
        <input
          type="text"
          autoFocus
          id="todo-input"
          placeholder="Enter todo to add"
          ref={node => (this.input = node)}
          onKeyDown={event => {
            if (event.keyCode === 13) {
              this.props.addTodo(this.input.value);
              this.input.value = "";
            }
          }}
        />
        <button
          className="btn btn-add"
          onClick={() => {
            this.props.addTodo(this.input.value);
            this.input.value = "";
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

module.exports = AddTodoForm;
