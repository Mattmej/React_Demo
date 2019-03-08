import React from 'react';


const withClass = (WrappedComponent, className) => {

    // We do accept props here. 
    // The props will be the props of our wrapped component.
    // We return this functional component in our hoc.
    // So ultimately, withClass will return the functional component
    // that wraps the Person component.

    // So we export whatever withClass returns
    // (we do this in Person.js)
    return props => (
        <div className={className}>
            {/* The below line does not work.*/}
            {/* <WrappedComponent props={props}/> */}

            {/* The spread operator here
                pulls out all the properties
                that are inside the props object
                and distributes them as new key-value pairs
                on the WrappedComponent. */}
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;