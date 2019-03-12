// a functional component
// because I don't plan on working with state here.

// import React, {Component} from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';



class Persons extends PureComponent {

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
        return (
          <Person 
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age} 

            // NOT a good key. If the list changes, every element 
            // will get a NEW index; it won't keep its original index.
            // key={index}

            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} 
            // isAuth={this.props.isAuthenticated}
          />
        );
    });
  }

    
};




export default Persons;