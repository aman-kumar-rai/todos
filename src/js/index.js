const React = require("react");
const ReactDOM = require("react-dom");
const TodosApp = require("./components/TodosApp.js");
const Redux = require("redux");

const reducer = require("./reducers/reducer.js");
const Action = require("./actions/actionCreator.js");

// creating the store and passing in the principal reducer to it...
const store = Redux.createStore(reducer);

// function to add a todo...
function addTodo(text) {
  store.dispatch(Action.addTodoAction(text));
}

// function to toggle a todo...
function toggleTodo(id) {
  store.dispatch(Action.toggleTodoAction(id));
}

// function to remove a todo...
function removeTodo(id) {
  store.dispatch(Action.removeTodoAction(id));
}

// function to be invoked everytime the store state changes...
function render() {
  ReactDOM.render(
    <TodosApp
      todos={store.getState().todos}
      addTodo={addTodo}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />,
    document.querySelector("#app")
  );
}

// subscribing for state changes using and passing render() as callback, so render() will be invoked everytime the store state changes causing the whole app to re-render...
store.subscribe(render);

// invoking render() initially to render the app...
render();
