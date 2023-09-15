import React from "react";
import classes from './MySelect.module.css'
const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
    value={value}
    onChange={event => onChange(event.target.value)}
    className={classes.mySelect}
    >
      <option disabled value="" className={classes.myOption}>{defaultValue}</option>
      {options.map(option => 
        <option className={classes.myOption} key={option.value} value={option.value}>
            {option.name}
        </option>
        )}
    </select>
  );
};

export default MySelect;
