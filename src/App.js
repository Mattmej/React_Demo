import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = { 
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  }

  // "Handler" => Not actively calling this method, 
  // but I'm assigning it as a method handler.
  switchNameHandler = () => { 
    console.log("Was clicked!");
  }


  render() {

    return (
      <div className="App">
        <h1>Hi I am a React app!</h1>
        <p>This is really working!</p>

        {/* Execute dynamic code */}
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );

    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"))
  }
}

export default App;
