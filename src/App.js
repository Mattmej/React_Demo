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

    otherState: "some other value",
    showPersons: false
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

  togglePersonsHandler = () => { 
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    // We are writing Javascript here,
    // so the values of the properties have to be strings.
    const style = { 
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I am a React app!</h1>
        <p>This is really working!</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/* If showPersons === true, display the div.
            Otherwise, do not display anything. */}

        { 
          this.state.showPersons ? 
        
          <div>
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

          </div> : null
        }
        

      </div>
    );

  }
}

export default App;
