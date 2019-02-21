// a functional component
// because I don't plan on working with state here.

import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // must return true or false.
    // true if react should continue updating,
    // false if it shouldn't.

    console.log('[Persons.js] shouldComponentUpdate');

    // This saves performance. 
    // For the removal of the cockpit, 
    // we did not have to go through the entirety of 
    // the Persons component tree to re-render the page.

    // If the Persons prop has changed, 
    // then update the Persons component.
    if (nextProps.persons !== this.props.persons) {
      return true;
    }

    // If the Persons prop hasn't changed, then do not update. 
    else {
      return false;
    }

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // This will trigger when we change the text in the input.
  // Will take getSnapshotBeforeUpdate's snapshot
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // In here, we can have any code that needs to run
  // right before the component is removed.
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map( (person, index) => {
        // return what you want to map this item into.
        // Handlers are removed for now.
        return (<Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age} 
          // NOT a good key. If the list changes, every element 
          // will get a NEW index; it won't keep its original index.
          // key={index}

          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
        );
    });
  }

    
};




export default Persons;