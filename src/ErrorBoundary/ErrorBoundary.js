import React, { Component } from 'react';

class ErrorBoundary extends Component { 

    state = { 
        hasError: false,
        errorMessage: ''
    }

    // Method that receives an error.
    // Will be executed whenever the component we wrap 
    // with the error boundary throws an error.
    componentDidCatch = (error, info) => { 
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) { 
            return <h1>{this.state.errorMessage}</h1>
        }

        else { 

            // Whatever we wrapped inside of ErrorBoundary
            // (our default case)
            return this.props.children
        }
    }
}

export default ErrorBoundary;