// A functional component.
// We don't want to manage state here.

import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        // classes.Red is a string created by the CSS loader.
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);  // classes = ['red']
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I am a React app!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>

            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;