import React from 'react';

export default (props) => {

  const setAll = () => {
    props.handleSetView('all');
  }

  const setActive = () => {
    props.handleSetView('active');
  }

  const setCompleted = () => {
    props.handleSetView('completed');
  }


  return (
    <div className="filter-buttons container">
      <a
        className={props.view === 'all' ? 'active' : undefined}
        onClick={setAll}>All</a>
      <a
        className={props.view === 'active' ? 'active' : undefined}
        onClick={setActive}>Active</a>
      <a
        className={props.view === 'completed' ? 'active' : undefined}
        onClick={setCompleted}>Done</a>
    </div>
  )
}
