import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cart/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
      <div className="w-full h-52 overflow-hidden">
      <Link to={`/product/${product.id}`}>
  <div className="cursor-pointer hover:scale-[1.02] transition">
  <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
  </div>
</Link>
       
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4">${product.price}</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex-1 bg-green-600 text-white py-2 rounded-xl text-sm hover:bg-green-700 transition"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="flex-1 bg-red-500 text-white py-2 rounded-xl text-sm hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
