import React from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks.jsx';
import Filter from './Filter.jsx';

/* eslint react/react-in-jsx-scope: 0 */
const App = () => (
  <div className="col-5">
    <NewTaskForm />
    <Filter />
    <Tasks />
  </div>
);
export default App;
