const React = require("react");

class TodosApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, addTodo, toggleTodo, removeTodo } = this.props;

    return (
      <React.Fragment>
        <div id="controls">
          <input
            type="text"
            id="todo-input"
            ref={node => (this.input = node)}
          />
          <button
            className="btn btn-add"
            onClick={() => {
              addTodo(this.input.value);
              this.input.value = "";
            }}
          >
            Add
          </button>
        </div>

        <ul id="todos-list">
          {todos.map(todo => {
            return (
              <li key={todo.id} className="todo-item">
                <span
                  className="fa fa-check todo-check"
                  onClick={() => toggleTodo(todo.id)}
                />
                <span
                  className="todo-text"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </span>
                <span
                  className="fa fa-trash todo-trash"
                  onClick={() => removeTodo(todo.id)}
                />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

module.exports = TodosApp;
