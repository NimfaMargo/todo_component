/* eslint react/prop-types: 0 */
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  handleAddTask = (e) => {
    e.preventDefault();
    const { addTask, text } = this.props;
    const task = { text, id: _.uniqueId(), state: 'active' };
    addTask({ task });
  }

  handleUpdateNewTaskText = () => {
    const { updateNewTaskText, text } = this.props;
    updateNewTaskText({ text });
  }

  render() {
    const { text } = this.props;

    return (
      <form className="form-inline" onSubmit={this.handleAddTask}>
        <div className="form-group mx-sm-3">
          <input
            type="text"
            required
            value={text}
            onChange={this.handleUpdateNewTaskText}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
