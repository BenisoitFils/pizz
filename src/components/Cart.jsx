import React, { useContext } from 'react';
import { PizzaContext } from '../PizzaContext';

const Cart = () => {
    const { cart, setCart } = useContext(PizzaContext);

    const incrementQuantity = (pizza) => {
        const newCart = cart.map(item => 
            item.id === pizza.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        setCart(newCart);
    };

    const decrementQuantity = (pizza) => {
        const newCart = cart.map(item => 
            item.id === pizza.id && (item.quantity || 1) > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity !== 0);
        setCart(newCart);
    };

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * (pizza.quantity || 1), 0);

    return (
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
            <h1 style={{ fontSize: '1.5em' }}>Detalles del pedido</h1>
            {cart.map(pizza => (
                <div key={pizza.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <img src={pizza.img} alt={pizza.name} style={{ width: '80px', height: '80px', marginRight: '10px', borderRadius: '5px' }} />
                    <h2 style={{ flex: 1, fontSize: '1em', margin: 0 }}>{pizza.name}</h2>
                    <p style={{ margin: '0 10px', fontSize: '0.9em', color: 'green' }}>Precio: ${pizza.price.toLocaleString()}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button 
                            onClick={() => decrementQuantity(pizza)}
                            style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px', marginRight: '5px', borderRadius: '3px' }}
                        >
                            -
                        </button>
                        <span style={{ fontSize: '0.9em', margin: '0 5px' }}>{pizza.quantity || 1}</span>
                        <button 
                            onClick={() => incrementQuantity(pizza)}
                            style={{ color: 'white', backgroundColor: 'blue', border: 'none', padding: '5px 10px', borderRadius: '3px' }}
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
            <h3 style={{ fontSize: '1.2em' }}>Total: ${totalPrice.toLocaleString()}</h3>
            <button style={{ color: 'white', backgroundColor: 'green', border: 'none', padding: '10px 20px', fontSize: '1em', borderRadius: '5px' }}>Ir a pagar</button>
        </div>
    );
};

export default Cart;
