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
          className="option__check"
          >
            {this.props.active ?
              <i onClick={this.changeActive} className="far fa-square"></i> :
              <i onClick={this.changeActive} className="far fa-check-square"></i>}
        </div>

        <div>
          <p className={`option__text ${this.props.active !== true ? 'complete' : undefined}`}>
            {this.props.name}</p>
        </div>

        <div>
          <h5
            onClick={this.removeOption}
            className="option__remove"
            >remove</h5>
        </div>
      </div>
    )
  }
}
