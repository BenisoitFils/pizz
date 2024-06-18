import React, { createContext, useState, useEffect } from 'react';
import pizzasData from './pizzas.json';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPizzas(pizzasData);
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas, setPizzas, cart, setCart }}>
            {children}
        </PizzaContext.Provider>
    );
};
