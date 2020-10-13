import React from 'react';
import classes from './Person.css';
import './Person.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

const Person = (props) => {
  return (
    <Aux>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.inputChange} value={props.name} />
    </Aux>
  );
};

export default withClass(Person, classes.Person);
