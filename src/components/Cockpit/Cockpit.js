// A functional component.
// We don't want to manage state here.

import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  // Our reference.
  // We could pass in an initial value if we want,
  // but that is more advanced than what we want.
  const toggleBtnRef = useRef(null);


  // Basically is componentDidMount and componentDidUpdate
  // combined into one hook.
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // A fake HTTP request.
    // If we just want "componentDidMount()"
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  // We can have as many useEffect functions as we want

  // This useEffect has no second argument, 
  // and so I am not controlling when this useEffect should run.
  // This should run for every update cycle.
  useEffect( () => {
    console.log('[Cockpit.js] 2nd useEffect');

    // Useful in case we have some operation that should be canceled
    // whenever the component re-renders.
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        // classes.Red is a string created by the CSS loader.
        btnClass = classes.Red;
    }


    // We outsourced the length calculation into App.js.
    // App.js will handle any changes to the length of the Persons array
    // Now we only get data that does NOT change with every keystroke.

    // Now when we run our code and attempt to enter 
    // text into the input field, 
    // the Cockpit.js useEffect methods won't run. 
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);  // classes = ['red']
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I am a React app!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>

            <button 
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};


// Cockpit only re-renders when its props change.
// We can optimize the way we pass data 
// into our Cockpit component
// so that the property we pass into Cockpit
// does not change.
export default React.memo(cockpit);