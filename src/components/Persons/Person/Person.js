import React, {Component} from 'react';
// import './Person.css';

import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component { 

    constructor(props) {

        super(props)
        // createRef() is a method offered  
        // on the React object we are importing.
        // We are storing the method in the inputElement.
        // That means that inputElement isn't necessarily our input.
        // inputElement is any reference object that React gives us.
        this.inputElementRef = React.createRef();
    }

    // Allows React to automatically connect the class-based component 
    // to your context behind the scenes.
    // Gives you a new property: this.context.
    static contextType = AuthContext;


    componentDidMount() {

        // current = gives us access to our current reference.
        this.inputElementRef.current.focus();

        // Allows us to get access to our context 
        // where we previously couldn't.
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');

        // Now this returns an array of JSX objects.
        // NOTE: each element must have a unique key.
        // Here, we are not randomly generating keys.
        // For now, we are assigning our own keys to each object.
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p>}
                
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>

                 {/* Here, we both listen to changes and pass down the state to the "Person" object.
                //     We then output the name as the value of the input */}
                <input 
                    key="i3"
                    
                    // Here, we are getting access to the input element
                    // and then we are storing it in a global property
                    // so that from now on, we can use it anywhere
                    // in our application.
                    // ref={(inputEl) => {this.inputElement = inputEl}}

                    // Behind the scenes, React will make a connection.
                    // inputElementRef will allow me access 
                    // to the element on which this ref assignment
                    // was placed.
                    ref={this.inputElementRef}
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