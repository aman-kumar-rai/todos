const React = require("react");
const TodoItem = require('./TodoItem.js');

class TodoList extends React.Component {
  render() {
    const {toggleTodo, removeTodo, todos} = this.props;

    return (
      <ul id="todos-list">
        {todos.map(todo => {
          return <TodoItem toggleTodo={toggleTodo} removeTodo={removeTodo} todo={todo} key={todo.id}/>
        })}
      </ul>
    );
  }
}

module.exports = TodoList;