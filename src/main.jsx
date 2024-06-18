import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PizzaProvider } from './PizzaContext';

ReactDOM.render(
    <React.StrictMode>
        <PizzaProvider>
            <App />
        </PizzaProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
