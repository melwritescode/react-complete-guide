import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Melanie" age="30">
          My Hobbies: Hiking, Camping
        </Person>
        <Person name="Mike" age="30" />
        <Person name="Sandy" age="61" />
      </div>
    );
  }
}

export default App;
