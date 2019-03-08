import React, {Component} from 'react';
// import './Person.css';

import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component { 
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>

    render() {
        console.log('[Person.js] rendering...');

        // Now this returns an array of JSX objects.
        // NOTE: each element must have a unique key.
        // Here, we are not randomly generating keys.
        // For now, we are assigning our own keys to each object.
        return (
            <Aux>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>

                 {/* Here, we both listen to changes and pass down the state to the "Person" object.
                //     We then output the name as the value of the input */}
                <input 
                    key="i3"
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>  
        );
    };
};

// Lowercase propTypes is important!
// Make sure it is lowercase!
Person.propTypes = {

    // Keys will be prop names.
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


// Anyone importing from the Person component
// and using the export as <Person /> 
// refers to the result of this withClass call. 
// Refer to the withClass functional component.
export default withClass(Person, classes.Person);