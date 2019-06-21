import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const ErrorAndApp = (
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
)

ReactDOM.render(
    ErrorAndApp,
    document.getElementById('root'),
);
