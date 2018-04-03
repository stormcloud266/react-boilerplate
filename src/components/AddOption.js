import React from 'react';

export default class AddOption extends React.Component {

  state = {
    error: undefined
  }

  addOption = (e) => {
    e.preventDefault();
    const option = {
      name: e.target.optionInput.value.trim().toLowerCase(),
      active: true
    }
    const error = this.props.handleAddOption(option);

    if (!error) {
      e.target.elements.optionInput.value = '';
      this.setState({ error:undefined })
    } else {
      this.setState({ error })
    }
  }

  removeAllCompleted = () => {
    this.props.handleRemoveAllCompleted()
  }


  render() {
    return (
      <div className="add-option container">
        <form
          onSubmit={this.addOption}
          className="add-option__form"
          >
          <input
            type="text"
            name="optionInput"
            placeholder="New Option"
            autoComplete="off"
            className="add-option__input"
          />
          <button className="add-option__add-button">Add New Option</button>
          <button
            onClick={this.removeAllCompleted}
            className="add-option__remove-all-button"
            type="button"
            >Remove All Completed</button>
        </form>

        {!!this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    )
  }
}
