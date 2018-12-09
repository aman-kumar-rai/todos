const React = require("react");

class TodoItem extends React.Component {
  render() {
    const { todo, removeTodo, toggleTodo } = this.props;
    return (
      <li
        className="todo-item"
        style={{
          backgroundColor: todo.completed ? "rgb(224, 220, 234)" : "white"
        }}
      >
        <span
          className="fa fa-check todo-check"
          onClick={() => toggleTodo(todo.id)}
          style={{
            border: todo.completed ? "1px solid green" : "2px solid grey"
          }}
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
