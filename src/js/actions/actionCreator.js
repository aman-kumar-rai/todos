// this function generates a random id...
function generateId(){
  return String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
}

// creating constants for different actions...
const ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// this function returns an action object for adding a todo item...
function addTodoAction(text){
  return {
    type: 'ADD_TODO',
    text: text,
    id: generateId()
  }
}

// this function returns an action object for toggling a todo item...
function toggleTodoAction(id){
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

// this function returns an action object for deleting a todo item...
function removeTodoAction(id){
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}

// this function returns the action object for SET_VISIBILITY_FILTER_ACTION...
function setVisibiliyFilterAction(filter){
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
}

// creating an object with references to all the methods and returning it as the public API for this module...
const Action = {
  addTodoAction,
  toggleTodoAction,
  removeTodoAction,
  setVisibiliyFilterAction,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER
};

module.exports = Action;