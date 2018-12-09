const React = require("react");

class TodosApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const {todos, addTodo, toggleTodo} = this.props;

    return (
      <React.Fragment>
        <div id="controls">
          <input type="text" id='todo-input' ref={(node) => this.input = node}/>
          <button className='btn btn-add' onClick={(event) => {
            addTodo(this.input.value);
            this.input.value = '';
          }}>Add</button>
        </div>

        <ul id="todos-list">
          {todos.map(todo => {
            return (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.complete ? "line-through" : "none"
                }}
                className="todo-item"
              >
                <span className="fa fa-check todo-check" onClick={toggleTodo}/>
                <span className='todo-text'>{todo.text}</span>
                <span className="fa fa-trash todo-trash" />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

module.exports = TodosApp;
