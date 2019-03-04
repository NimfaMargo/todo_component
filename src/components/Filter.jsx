import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

/* eslint react/prop-types: 0 */
const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const mapStateToProps = (state) => {
  const props = {
    filterName: state.tasks.currentFilterName, // 'all'
  };
  return props;
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

class Filter extends React.Component {
  applyFilter = (filterName) => {
    const { setTasksFilter } = this.props;
    setTasksFilter({ filterName });
  }

  renderFilter = ([state, name]) => {
    if (this.props.filterName === state) {
      return name;
    }
    return (
      <button
        key={state}
        className="btn btn-link border-0 p-0"
        data-test={`task-filter-${state}`}
        type="button"
        onClick={() => this.applyFilter(state)}
      >
        {name}
      </button>
    );
  }

  render() {
    return (
      <div className="mt-3 d-flex justify-content-around">
        {filters.map(this.renderFilter)}
      </div>
    );
  }
}
/* eslint react-redux/prefer-separate-component-file: 0 */
export default connect(mapStateToProps, actionCreators)(Filter);
