import React from 'react';
export default class Option extends React.Component {


  changeActive = () => {
    this.props.handleChangeActive(this.props.name)
  }
  removeOption = () => {
    this.props.handleRemoveOption(this.props.name)
  }

  render() {
    return (
      <div className="option container">
        <div
          onClick={this.changeActive}
          className="option__check"
          >{this.props.active ? <i className="far fa-square"></i> : <i className="far fa-check-square"></i>}
        </div>
        <p className="option__text">{this.props.name}</p>
        <h5
          onClick={this.removeOption}
          className="option__remove"
          >remove</h5>
      </div>
    )
  }
}
