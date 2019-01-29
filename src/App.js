import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = { 
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],

    otherState: "some other value"
  }

  // "Handler" => Not actively calling this method, 
  // but I'm assigning it as a method handler.
  switchNameHandler = (newName) => { 
    //console.log("Was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    
    })
  }


  render() {

    return (
      <div className="App">
        <h1>Hi I am a React app!</h1>
        <p>This is really working!</p>

        {/* Execute dynamic code */}
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          >
            Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>

      </div>
    );

  }
}

export default App;
