import React from 'react';
import './Cart.css';

function Cart({ cartItems, addToCart, decreaseQuantity, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-popup">🎉 Your cart is empty! Add some cool gadgets!</div>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ₹{item.price} × {item.quantity}</span>
            <div>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
