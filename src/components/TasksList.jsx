import React from 'react';
/* eslint react/prop-types: 0 */
const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

export default class TasksList extends React.Component {
  // BEGIN (write your solution here)
  state = {
    filterState: 'all',
  };
  // END

  removeTask = id => () => {
    const { removeTask } = this.props;
    removeTask({ id });
  }

  toggleTaskState = id => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState({ id });
  }

  // BEGIN (write your solution here)
  handleFilter = (state) => {
    this.setState({ filterState: state });
  }

  renderTasks = (tasks) => {
    const { filterState } = this.state;
    const filteredTasks = filterState === 'all' ? tasks : tasks.filter(el => el.state === filterState);
    return (
      <ul className="list-group">
        {filteredTasks.map(({ id, text, state }) => (
          <li key={id} className="list-group-item d-flex justify-content-end">
            <button onClick={this.toggleTaskState(id)} className="btn border-0 p-0 app-toggle-state mr-3">-</button>
            <div className="mr-auto">{state === 'active' ? text : <s>{text}</s>}</div>
            <button onClick={this.removeTask(id)} className="btn border-0 p-0 app-remove-task">x</button>
          </li>
        ))}
      </ul>
    );
  }

  renderFilter = ([state, name]) => {
    const { filterState } = this.state;
    if (filterState === state) {
      return name;
    }
    return (
      <button
        key={state}
        className={`btn btn-link border-0 p-0 app-filter-${state}`}
        onClick={() => this.handleFilter(state)}
      >
        {name}
      </button>
    );
  }
  // END

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }
    // BEGIN (write your solution here)
    return (
      <div className="mt-3">
        {this.renderTasks(tasks)}
        <div className="col-8 mt-3 d-flex justify-content-around">
          {filters.map(this.renderFilter)}
        </div>
      </div>
    );
    // END
  }
}
