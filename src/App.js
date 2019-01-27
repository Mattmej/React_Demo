import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hi I am a React app!</h1>
        <p>This is really working!</p>

        {/* Example of props being passed into React components */}
        <Person name="Matt" age="26"/>
        <Person name = "Jen" age="22">Hobbies: Racing</Person>
        <Person name = "Gary" age="32"/>

      </div>
    );

    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"))
  }
}

export default App;
