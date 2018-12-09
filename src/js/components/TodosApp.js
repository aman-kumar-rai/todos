const React = require("react");

class TodosApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div id="controls">
          <input type="text" id='todo-input'/>
          <button className='btn btn-add'>Add</button>
        </div>

        <ul id="todos-list">
          {this.props.todos.map(todo => {
            return (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.complete ? "line-through" : "none"
                }}
                className="todo-item"
              >
                <span className="fa fa-check todo-check" />
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
