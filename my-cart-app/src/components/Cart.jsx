import { useSelector } from 'react-redux';
import React from 'react';

function Cart() {
  const items = useSelector((state) => state.cart.items);

  // Total quantity calculation
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-100 p-4 mb-4 rounded text-lg font-medium">
      🛒 Cart Items: {totalItems}
    </div>
  );
}

export default Cart;
