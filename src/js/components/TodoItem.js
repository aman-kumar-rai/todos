const React = require("react");

class TodoItem extends React.Component {
  render() {
    const {todo, removeTodo, toggleTodo} = this.props;
    return (
      <li className="todo-item">
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
  }
}

module.exports = TodoItem;
