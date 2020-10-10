import React, { Component } from 'react';
import classes from './App.css';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { name: 'Melanie', age: 30 },
      { name: 'Mike', age: 31 },
      { name: 'John', age: 32 },
    ],
    showPersons: false,
  };

  handleSwitchNames = (name) => {
    this.setState({
      persons: [
        { name, age: 4 },
        { name: 'Olive', age: 2 },
        { name: 'Ava', age: 6 },
      ],
    });
  };

  handleChangeName = (e, idx) => {
    /**Make a copy of the selected person and change their name */
    const personIdx = this.state.persons.findIndex((p, pIdx) => pIdx === idx); // Select the idx person from this array whose idx, matches the idx that was passed to us from the click event
    const person = { ...this.state.persons[personIdx] }; // Use personIdx to find the actual element (person obj) from the state, make a copy of that obj to mutate
    person.name = e.target.value; // change the name of that person, to whatever input we receive from the text input

    /** Make a copy of the persons state. Find the target of the event, swap them out with the newly updated person */
    const persons = [...this.state.persons]; // Make a copy of the persons state to mutate
    persons[personIdx] = person; // Use personIdx to select the person (event target) from the persons array, update that person to the newly updated person with the changed name property
    this.setState({ persons: persons }); // Set the state with the updated persons array that contains the newly updated person
  };

  handleTogglePersons = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons });
  };

  handleDeletePersons = (personIdx) => {
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({ persons: persons });
  };

  render() {
    let personsList = null;

    if (this.state.showPersons) {
      personsList = (
        <Persons
          persons={this.state.persons}
          clicked={this.handleDeletePersons}
          changed={this.handleChangeName}
        />
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          togglePersons={this.handleTogglePersons}
        />
        {personsList}
      </div>
    );
  }
}

export default App;
