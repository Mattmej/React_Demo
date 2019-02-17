import React, {Component} from 'react';
// import './Person.css';
import classes from './Person.css';

class Person extends Component { 
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>

    render() {
        console.log('[Person.js] rendering...');

        return (
            
            // NOTE: Here, the CSS class is unique.
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
    
                {/* Here, we both listen to changes and pass down the state to the "Person" object.
                    We then output the name as the value of the input */}
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    };

    
};

export default Person;