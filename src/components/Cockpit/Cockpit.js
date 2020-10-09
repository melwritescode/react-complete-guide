import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button className={btnClass} onClick={props.togglePersons}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
