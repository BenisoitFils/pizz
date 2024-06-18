import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';
import './Home.css';

const Home = () => {
    const { pizzas, cart, setCart } = useContext(PizzaContext);

    const addToCart = (pizza) => {
        const existingPizza = cart.find(item => item.id === pizza.id);
        if (existingPizza) {
            existingPizza.quantity += 1;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
    };

    return (
        <div className="home">
            {pizzas.map(pizza => (
                <div key={pizza.id} className="pizza-card">
                    <img src={pizza.img} alt={pizza.name} className="pizza-img" />
                    <h3>{pizza.name}</h3>
                    <div className="pizza-ingredients">
                        <h4>Ingredientes:</h4>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="pizza-price">${pizza.price.toLocaleString()}</p>
                    <div className="pizza-buttons">
                        <Link to={`/pizza/${pizza.id}`} className="btn view-more-btn">
                            Ver Más
                        </Link>
                        <button onClick={() => addToCart(pizza)} className="btn add-to-cart-btn">
                            Añadir
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
