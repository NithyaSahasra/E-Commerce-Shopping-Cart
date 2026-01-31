import React from 'react';

function ProductCard({ product, addToCart, cartItems = [] }) {
  const inCart = cartItems.find(item => item.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      {inCart ? (
        <div>
          <button className="added-btn">✔ Added</button>
          <button className="plus-btn" onClick={() => addToCart(product)}>+ Add More</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;
