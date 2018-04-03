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
      <a onClick={setAll}>All</a>
      <a onClick={setActive}>Active</a>
      <a onClick={setCompleted}>Done</a>
    </div>
  )
}
