function ProductList({ addToCart, cartItems }) {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-list">
            {products
              .filter(p => p.category === category)
              .map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  cartItems={cartItems}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
