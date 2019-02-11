import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = { 
    persons: [
      { id: 'egerg', name: "Max", age: 28 },
      { id: 'asdgsx', name: "Manu", age: 29 },
      { id: 'kuijymh', name: "Stephanie", age: 26 }
    ],

    otherState: "some other value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    // finding a single person
    // Takes a function as an input value.
    // (p = a "person" object)
    const personIndex = this.state.persons.findIndex(p => {

      // Is this the person I was looking for?
      // Find index where this statement is true.
      return p.id === id;
    });

    // Try not to use this; here we are mutating the state directly.
    // const person = this.state.persons[personIndex];

    // This is a better way. Using spread operator.
    // Here we create a new JS object, and make a spread operator
    // to distribute all of the properties of the object we fetch 
    // into the new object we are creating here.
    const person = {
      ...this.state.persons[personIndex]
    }

    // Updating the person name to whatever is in the field.
    // I am NOT manipulating the state directly. 
    // I am manipulating a copy of the state.
    person.name = event.target.value;

    // Getting the whole persons array
    const persons = [...this.state.persons];

    // Updating the persons array at one position
    // based on whatever changes have occurred.
    persons[personIndex] = person;

    this.setState( {persons: persons} )
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
    this.setState({persons: persons});      
  }

  togglePersonsHandler = () => { 
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    // We are writing Javascript here,
    // so the values of the properties have to be strings.
    const style = { 
      backgroundColor: 'green', 
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
              age={person.age} 
              // NOT a good key. If the list changes, every element 
              // will get a NEW index; it won't keep its original index.
              // key={index}

              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}


        </div>
      );

      // Dynamically changing button color.
      // If showPersons is true, then the button's background will turn red.
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // === One way to dynamically add classes: array of strings. ===

    // Test.
    // Make text red and bold no matter what.
    // let classes = ['red', 'bold'].join(' ');

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I am a React app!</h1>
          <p className={classes.join(' ')}>This is really working!</p>

          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}
      
        </div>
      </StyleRoot>
    );
  }
}

// A higher-order component.
// A component wrapping another component.
export default Radium(App);
