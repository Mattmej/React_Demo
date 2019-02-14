import React from 'react';
// import './Person.css';
import classes from './Person.css';

const person = (props) => { 
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>

    const rnd = Math.random();

    if (rnd > 0.7) { 
        throw new Error('Something went wrong.');
    }

    return (



        // NOTE: Here, the CSS class is unique.
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>

            {/* Here, we both listen to changes and pass down the state to the "Person" object.
                We then output the name as the value of the input */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;