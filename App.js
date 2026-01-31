import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = id => {
    const item = cartItems.find(i => i.id === id);
    if (item.quantity === 1) {
      // remove if quantity goes to 0
      setCartItems(cartItems.filter(i => i.id !== id));
    } else {
      setCartItems(
        cartItems.map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    }
  };

  const removeFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">🏠 Home</Link>
        <Link to="/cart">🛒 View Cart ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductPage addToCart={addToCart} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
