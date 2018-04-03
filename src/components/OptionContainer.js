import React from 'react';
import Option from './Option';


export default (props) => {

  const filteredOptions = props.options.filter((option) => {
    switch (props.view) {
      case 'all':
        return option;
      case 'active':
        return option.active === true;
      case 'completed':
        return option.active === false;
    }
  }).filter((option) => {
    return option.name.indexOf(props.search) !== -1;
  })

  return (
    <div>
      {

      filteredOptions.map((option) => (
        <Option
          handleChangeActive={props.handleChangeActive}
          handleRemoveOption={props.handleRemoveOption}
          name={option.name}
          key={option.name}
          active={option.active}
        />
      ))}
    </div>
  )
}
