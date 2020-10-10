import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.red;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button className={btnClass} onClick={props.togglePersons}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
