import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';

const PizzaDetail = () => {
    const { id } = useParams();
    const { pizzas, cart, setCart } = useContext(PizzaContext);

    const pizza = pizzas.find(pizza => pizza.id === id);

    const addToCart = () => {
        const newCart = [...cart];
        const foundPizza = newCart.find(item => item.id === pizza.id);
        if (foundPizza) {
            foundPizza.quantity = (foundPizza.quantity || 1) + 1;
        } else {
            newCart.push({ ...pizza, quantity: 1 });
        }
        setCart(newCart);
    };

    if (!pizza) {
        return <h2>Pizza no encontrada</h2>;
    }

    return (
        <div>
            <img src={pizza.img} alt={pizza.name}  style={{ width: '80px', height: '80px', marginRight: '10px', borderRadius: '5px' }}   />
            <h1>{pizza.name}</h1>
            <p>{pizza.desc}</p>
            <h3>Ingredientes:</h3>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>Precio: {pizza.price}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
};

export default PizzaDetail;
