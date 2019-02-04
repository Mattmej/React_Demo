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

  deletePersonHandler = (personIndex) => { 

    // Fetch all the persons

    // ONE OPTION:
    // const persons = this.state.persons.slice();

    // ES6 ALTERNATIVE:
    // spreads out the elements of this array into a list of elements
    // which gets added to a new array.
    // Now we have a new array with the objects of the old array,
    // but not the old array itself
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);    // remove one element from the array
    this.setState({persons: persons});        // NOTE: This approach has a flaw. It will be covered in the next lecture.

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
    };

    // We will render either nothing, or the list of persons
    // depending on the state of showPersons

    // State change will trigger an update.

    // Rendering nothing initially
    let persons = null;

    // ...but if showPersons is true, then persons will be rendered.
    if (this.state.showPersons) { 
      persons = (
        <div>


          {this.state.persons.map((person, index) => {
            // return what you want to map this item into.
            // Handlers are removed for now.
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}


        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I am a React app!</h1>
        <p>This is really working!</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      
      </div>
    );

  }
}

export default App;
