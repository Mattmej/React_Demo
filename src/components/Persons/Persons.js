// a functional component
// because I don't plan on working with state here.

import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    // If it is on one line, we can omit the "return" statement.
    // return ();

    props.persons.map( (person, index) => {
        // return what you want to map this item into.
        // Handlers are removed for now.
        return <Person 
          click={() => props.clicked(index)}
          name={person.name} 
          age={person.age} 
          // NOT a good key. If the list changes, every element 
          // will get a NEW index; it won't keep its original index.
          // key={index}

          key={person.id}
          changed={(event) => props.changed(event, person.id)} />
      });



export default persons;