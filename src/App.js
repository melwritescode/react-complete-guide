import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Melanie', age: 30 },
      { name: 'Mike', age: 31 },
      { name: 'John', age: 32 },
    ],
  };

  handleSwitchNames = () => {
    this.setState({
      persons: [
        { name: 'Bambi', age: 4 },
        { name: 'Olive', age: 2 },
        { name: 'Ava', age: 6 },
      ],
    });
  };

  render() {
    const { persons } = this.state;

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.handleSwitchNames}>Switch Names</button>
        <Person name={persons[0].name} age={persons[0].age}>
          My Hobbies: Hiking, Camping
        </Person>
        <Person name={persons[1].name} age={persons[1].age} />
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
