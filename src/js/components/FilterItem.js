const React = require("react");

class FilterItem extends React.Component {
  
  render() {
    const {filter, currentFilter, filterTodos} = this.props;
    return (
      <li
        style={{
          color: filter == currentFilter ? "red" : "white"
        }}
        className={"visibility-list-item"}
        onClick={() => filterTodos(filter)}
      >
        {filter}
      </li>
    );
  }
}

module.exports = FilterItem;
