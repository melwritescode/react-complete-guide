import React from 'react';
import classes from './Person.css';
import './Person.css';

const Person = (props) => {
  return (
    <div>
      <div className={classes.Person}>
        <p onClick={props.click}>
          I'm {props.name} and I'm {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.inputChange} value={props.name} />
      </div>
    </div>
  );
};

export default Person;
