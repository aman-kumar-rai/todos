const React = require("react");
const AddTodoForm = require("./AddTodoForm.js");
const TodoList = require("./TodoList.js");

class TodosApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, addTodo, toggleTodo, removeTodo } = this.props;
    return (
      <React.Fragment>
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          todos={todos}
        />
      </React.Fragment>
    );
  }
}

module.exports = TodosApp;
