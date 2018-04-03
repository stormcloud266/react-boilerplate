import React from 'react';

export default (props) => {

  const search = (e) => {
    const inputValue = props.handleSearch(e.target.value);
  }

  return (
    <div className="search container">
      <input
        type="text"
        placeholder="Search Options"
        onChange={search}
        className="search__input"
        ></input>
    </div>
  )
}
