// this function generates a random id...
function generateId(){
  return String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
}


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

// creating an object with references to all the methods and returning it as the public API for this module...
const Action = {
  addTodoAction,
  toggleTodoAction,
  removeTodoAction
};

module.exports = Action;