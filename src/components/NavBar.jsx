import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';
import pizzaBackground from '../assets/pizza-background.jpg'; // Assurez-vous que l'image est dans le dossier assets

const NavBar = () => {
    const { cart } = useContext(PizzaContext);

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * (pizza.quantity || 1), 0);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/" className="home-link">
                        <FaPizzaSlice className="icon" />
                        <span>Pizzería Mamma Mia!</span>
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/carrito" className="cart-link">
                        <FaShoppingCart className="icon" />
                        <span>${totalPrice}</span>
                    </Link>
                </div>
            </nav>
            <div className="header-content">
                <h1>Bienvenue chez Pizzería Mamma Mia!</h1>
                <p>Les meilleures pizzas en ville, faites avec amour et des ingrédients frais.</p>
            </div>
        </div>
    );
};

export default NavBar;
