import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const categories = ["Phones", "Audio", "Wearables", "Computers", "Cameras"];

  return (
    <div className="home">
      <div className="header">
        <h1>Electronics Hub</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" className="profile-icon" />
      </div>
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map(cat => (
          <Link key={cat} to={`/products/${cat}`} className="category-card">
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
