import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {

    // Executes the constructor of the component we are extending
    super(props);

    console.log('[App.js] constructor');

    // Older syntax for initializing state.
    this.state = {
      persons: [
        { id: 'egerg', name: "Max", age: 28 },
        { id: 'asdgsx', name: "Manu", age: 29 },
        { id: 'kuijymh', name: "Stephanie", age: 26 }
      ],
  
      otherState: "some other value",
      showPersons: false
    }
  }


  // This is more modern JS syntax. 
  // An alternate way is displayed above.
  // state = { 
  //   persons: [
  //     { id: 'egerg', name: "Max", age: 28 },
  //     { id: 'asdgsx', name: "Manu", age: 29 },
  //     { id: 'kuijymh', name: "Stephanie", age: 26 }
  //   ],

  //   otherState: "some other value",
  //   showPersons: false
  // }


  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // Has to return something. 
  // Otherwise returns false and blocks the update.
  // If update is blocked, then toggling persons won't work.
  // If this hook is not included, then it defaults to true.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {

    // finding a single person
    // Takes a function as an input value.
    // (p = a "person" object)
    const personIndex = this.state.persons.findIndex(p => {
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

    console.log('[App.js] render');

    // We will render either nothing, or the list of persons
    // depending on the state of showPersons

    // State change will trigger an update.

    // Rendering nothing initially
    let persons = null;

    // ...but if showPersons is true, then persons will be rendered.
    if (this.state.showPersons) { 

      // This is one component that renders the lists
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    // === One way to dynamically add classes: array of strings. ===

    // Test.
    // Make text red and bold no matter what.
    // let classes = ['red', 'bold'].join(' ');



    return (

        // Applies the .App CSS class and styles to this div.
        // The CSS loader transforms the CSS classname we set up 
        // in the CSS file into a unique one.
        <div className={classes.App}>
          
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />

          {persons}
      
        </div>
    );
  }
}

// A higher-order component.
// A component wrapping another component.
export default App;
