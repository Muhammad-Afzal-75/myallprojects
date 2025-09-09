import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import products from '../product';
import { addToCart } from '../redux/cart/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, selectedSize, selectedColor }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-xl text-green-600 font-semibold mb-2">${product.price}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-lg">★★★★☆</span>
          <span className="text-sm text-gray-500 ml-2">(45 reviews)</span>
        </div>

        {/* Size Selector */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-1">Select Size</h4>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 rounded-full border ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700'
                } hover:border-black`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-1">Select Color</h4>
          <div className="flex gap-2">
            {['black', 'red', 'blue', 'white'].map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedColor === color ? 'border-black' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          fringilla augue. Cras ultrices est sit amet sapien viverra, a gravida
          velit pulvinar.
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
