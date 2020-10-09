import React from 'react';
import Person from '../Person/Person';

const Persons = (props) =>
  props.persons.map((person, idx) => {
    return (
      <Person
        key={idx}
        name={person.name}
        age={person.age}
        inputChange={(event) => props.changed(event, idx)}
        click={() => props.clicked(idx)}
      />
    );
  });

export default Persons;
