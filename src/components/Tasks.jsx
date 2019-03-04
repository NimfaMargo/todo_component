import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { filteredTasksSelector } from '../selectors';

/* eslint react/prop-types: 0 */

const mapStateToProps = (state) => {
  const props = {
    tasks: filteredTasksSelector(state),
  };
  return props;
};

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
  setTasksFilter: actions.setTasksFilter,
};

class Tasks extends React.Component {
  handleRemoveTask = id => () => {
    const { removeTask } = this.props;
    removeTask({ id });
  };

  handleToggleTaskState = id => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState({ id });
  };

  renderTasks() {
    const { tasks } = this.props;

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text, state }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">
                <a data-test="task-toggle-state" href="#" onClick={this.handleToggleTaskState(id)}>
                  {state === 'active' ? text : <s>{text}</s>}
                </a>
              </span>
              <button type="button" data-test="task-remove" className="close" onClick={this.handleRemoveTask(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        {this.renderTasks()}
      </div>
    );
  }
}
/* eslint react-redux/prefer-separate-component-file: 0 */
export default connect(mapStateToProps, actionCreators)(Tasks);
