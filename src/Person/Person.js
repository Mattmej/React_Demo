import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => { 
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }


    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>

            {/* Here, we both listen to changes and pass down the state to the "Person" object.
                We then output the name as the value of the input */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);