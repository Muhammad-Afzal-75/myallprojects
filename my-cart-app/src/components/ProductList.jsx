import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../product';

const ProductList = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
