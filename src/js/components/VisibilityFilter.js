const React = require("react");

class VisibilityFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["ALL", "COMPLETED", "INCOMPLETE"]
    };
  }

  render() {

    const {currentFilter, filterTodos} = this.props;

    return (
      <div id="visibility-filter-div">
        <p id="show-text">Show:</p>
        <ul id="visibiliy-list">
          {this.state.filters.map(filter => {
            return (
              <li
                style={{
                  color: filter == currentFilter ? "red" : "white"
                }}
                className={"visibility-list-item"}
                key={filter}
                onClick={(() => filterTodos(filter))}
              >
                {filter}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = VisibilityFilter;
