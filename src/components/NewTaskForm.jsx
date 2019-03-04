import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

const mapStateToProps = () => {
  const props = {
  };
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
};

/* eslint react/prop-types: 0 */
class NewTaskForm extends React.Component {
  handleSubmit = (values) => {
    const { text } = values;
    const task = { text, id: _.uniqueId(), state: 'active' };
    this.props.addTask({ task });
    this.props.reset();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form action="" className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group mx-sm-3">
        <Field name="text" required component="input" type="text" />
      </div>
        <input type="submit" className="btn btn-primary btn-sm" value="Add" />
      </form>
    );
  }
}
/* eslint react-redux/prefer-separate-component-file: 0 */
const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default reduxForm({
  form: 'newTaskForm',
})(ConnectedNewTaskForm);
