const Action = require('./../actions/actionCreator.js');

// reducer for the todo items...
function todosReducer(state = [], action) {
  switch (action.type) {
    case Action.ADD_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      });
      break;

    case Action.TOGGLE_TODO:
      return state.map(todo => {
        return todo.id == action.id
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo;
      });
      break;

    case Action.REMOVE_TODO:
      return state.filter(todo => {
        return todo.id != action.id;
      });
      break;

    default:
      return state;
      break;
  }
}

// reducer for the visibility filter...
function visibilityFilterReducer(state = "SHOW_ALL", action) {
  switch (action.type) {
    case Action.SET_VISIBILITY_FILTER:
      return action.type;
      break;

    default:
      return state;
      break;
  }
}

// this is the principal reducer function which calls the reducers for todos and visbility filter...
function reducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
  };
}

module.exports = reducer;
