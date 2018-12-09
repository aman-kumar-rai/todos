const React = require("react");
const FilterItem = require('./FilterItem.js');

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
            return <FilterItem filter={filter} currentFilter={currentFilter} key={filter} filterTodos={filterTodos}/>
          })}
        </ul>
      </div>
    );
  }
}

module.exports = VisibilityFilter;
