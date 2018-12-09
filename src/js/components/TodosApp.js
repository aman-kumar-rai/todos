const React = require('react');


class TodosApp extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    console.log(this.props);
    return (
      <React.Fragment>
        <input type='text' />
        <button>Add Todo</button>

        <ul>
          {
            this.props.todos.map(todo => {
              return (
                <li key={todo.id}
                  style={{
                    textDecoration: todo.complete ? 'line-through': 'none'
                  }}
                >
                  {todo.text}
                </li>
              )
            })
          }
        </ul>
      
      </React.Fragment>
    );
  }
}

module.exports = TodosApp;