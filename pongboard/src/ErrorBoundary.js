import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        console.log('in component did catch');
        this.setState( { hasError: true });
        // Some type of logging probably
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;