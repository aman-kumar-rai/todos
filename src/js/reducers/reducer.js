// this is the principal reducer for the app right now and later it will be replaced by a call to Redux.combineReducers() api...

// creating the initialState for the app, and later this will be reducer by what ever we fetch from the local storage, and thus we will be able to persist the data in our app...
const initialState = {
  todos: [
    {
      id: 0,
      text: "Be the best or don't exist",
      complete: false
    },
    {
      id: 1,
      text: "Walk the dog",
      complete: false
    }
  ],
  visibilityFilter: "SHOW_ALL"
};

// for now, this reducer just relays back the state to the dispatch() of the store...
function reducer(state = initialState, action) {
  return state;
}

module.exports = reducer;
