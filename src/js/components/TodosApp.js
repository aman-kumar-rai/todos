const React = require("react");
const AddTodoForm = require("./AddTodoForm.js");
const TodoList = require("./TodoList.js");
const VisibilityFilter = require("./VisibilityFilter.js");

class TodosApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      todos,
      addTodo,
      toggleTodo,
      removeTodo,
      currentFilter,
      filterTodos
    } = this.props;

    // array to todos to be rendered currently...
    let renderTodos;

    // checking the currentFilter to get the todos to render...
    switch (currentFilter) {
      case "ALL":
        renderTodos = [...todos];
        break;

      case "COMPLETED":
        renderTodos = todos.filter(todo => todo.completed);
        break;

      case "INCOMPLETE":
        renderTodos = todos.filter(todo => !todo.completed);
        break;
    }

    return (
      <React.Fragment>
        <h1 id="app-title">Todos</h1>
        <AddTodoForm addTodo={addTodo} />
        <VisibilityFilter
          currentFilter={currentFilter}
          filterTodos={filterTodos}
        />
        <TodoList
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          todos={renderTodos}
        />
      </React.Fragment>
    );
  }
}

module.exports = TodosApp;
