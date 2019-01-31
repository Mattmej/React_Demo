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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },

        /* The input here will be the target into which we typed.*/
        { name: event.target.value, age: 29 },

        { name: "Stephanie", age: 26 }
      ]
    
    })
  }


  render() {

    return (
      <div className="App">
        <h1>Hi I am a React app!</h1>
        <p>This is really working!</p>

        {/* Arrow function that takes no arguments,
              but theoretically it would receive an event object
              (we won't use it here)

            Returns a function call (note the parentheses).
            It is not getting executed immediately.
            Instead, an anonymous function is passed,
              which will be executed on a click
              and returns the result of the function being executed.

        
            Implicitly adds a return keyword in front of the code 
              that comes directly after the arrow, if it is written in one line.
              (This is a feature of arrow functions)
        */}

        <button onClick={() => this.switchNameHandler("Maximilian!!")}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}
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
