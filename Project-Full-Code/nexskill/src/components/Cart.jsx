import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { decrementCartItem, fetchCart, incrementCartItem, removeCartItem } from "../redux/feature/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, loading, error, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart()); // Fetch cart on component mount
  }, [dispatch, cartItems]);

  if (loading) return <p className="text-center text-lg font-semibold">Loading cart...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">
  Image
  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mt-2" />
</p>

                <div className="flex items-center space-x-2 mt-2">
                  <button
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => dispatch(decrementCartItem(item.productId))}
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    onClick={() => dispatch(incrementCartItem(item.productId))}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button
                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => dispatch(removeCartItem(item.productId))}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="text-xl font-bold mt-6 text-center">Total Price: ${totalPrice}</h3>
      {/* checkout button */}
   <Link to="/checkout">
   <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-
   600">
    Checkout
   </button>

   </Link>
  
    </div>
  );
};

export default Cart;
