const React = require('react');
const ReactDOM = require('react-dom');
const TodosApp = require('./components/TodosApp.js');
const Redux = require('redux');

const reducer = require('./reducers/reducer.js');


// creating the store and passing in the principal reducer to it...
const store = Redux.createStore(reducer);


// function to be invoked everytime the store state changes...
function render(){
  console.log('whole app rendered/re-rendered...');
  ReactDOM.render(<TodosApp todos={store.getState().todos}/>, document.querySelector('#app'));
}


// subscribing for state changes using and passing render() as callback, so render() will be invoked everytime the store state changes causing the whole app to re-render...
store.subscribe(render);

// invoking render() initially to render the app...
render();





