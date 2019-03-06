import React, {Component} from 'react';
// import './Person.css';

import Aux from '../../../hoc/Auxiliary';
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

export default Person;