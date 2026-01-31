import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';
import { Link } from 'react-router-dom';

// Inside the return block, just above <h2>
<Link to="/" className="back-home">⬅ Back to Home</Link>


function ProductPage({ addToCart }) {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  // ✅ Safe check before using toLowerCase
  const filtered = products.filter(p =>
    p.category &&
    category &&
    p.category.toLowerCase() === category.toLowerCase() &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-page">
      <h2>{category} Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="product-list">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p style={{ color: "white" }}>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
