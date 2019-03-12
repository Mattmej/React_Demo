import React from 'react';


// createContext allows us to initialize our context
// with a default value.

// Context is a globally available JS object.
// Though, we decide where it is available.
// This context value doesn't have to be an object.
// It can technically be an array, a string, a number, etc.
const authContext = React.createContext({
    authenticated: false, 

    // Empty anonymous function.
    // Adding b/c if I initialzie my default value
    // with everything I want to be able to access 
    // on this context from different components in my app,
    // then I actually get better autocompletion from the IDE. 
    login: () => {}
});

export default authContext;