import { createSelector } from 'reselect';

export const getTask = state => state.tasks.byId;
export const getTaskIds = state => state.tasks.allIds;
export const getFilterName = state => state.tasks.currentFilterName;
export const tasksSelector = createSelector(
  getTask,
  getTaskIds,
  (task, allIds) => allIds.map(id => task[id]),
);
export const filteredTasksSelector = createSelector(
  tasksSelector,
  getFilterName,
  (tasks, filter) => (filter === 'all' ? tasks : tasks.filter(t => t.state === filter)),
);
