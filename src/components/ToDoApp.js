import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import FilterButtons from './FilterButtons';
import Search from './Search';
import OptionContainer from './OptionContainer';
import Option from './Option';
import AddOption from './AddOption';


class ToDoApp extends React.Component {
  state = {
    view: 'all',
    search: '',
    options: []
  };

  handleAddOption = (option) => {

    if (!option.name) return 'Please enter an item.'

    if (this.state.options.findIndex( i => i.name === option.name) > -1 ) {
      return 'This option already exists.'
    }

    this.setState(( prevState ) => ({
      options: prevState.options.concat(option)
    }))

  }

  handleRemoveOption = ( name ) => {
    const newOptions = this.state.options.filter( option => option.name !== name )
    this.setState(() => ({ options: newOptions }));
  }

  handleRemoveAllCompleted = () => {
    const newOptions = this.state.options.filter( option => option.active !== false );
    this.setState(() => ({ options :newOptions }));
  }

  handleChangeActive = ( name ) => {
    const newOptions = this.state.options.map( option => {
      if (name !== option.name) return option;
      return {
        ...option,
        active: !option.active
      };
    });
    this.setState(() => ({ options: newOptions }))
  }

  handleSetView = ( view ) => { this.setState({ view }) }

  handleSearch = ( search ) => { this.setState({ search }) }

  lg = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        {/* <button onClick={this.lg}>click</button> */}
        <FilterButtons
          handleSetView={this.handleSetView}
          view={this.state.view}
        />
        <Search handleSearch={this.handleSearch} />
        <OptionContainer
          handleChangeActive={this.handleChangeActive}
          handleRemoveOption={this.handleRemoveOption}
          options={this.state.options}
          search={this.state.search}
          view={this.state.view}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
          handleRemoveAllCompleted={this.handleRemoveAllCompleted}
        />
      </div>
    )
  }
}

export default ToDoApp;
