import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, logoutuser } from '../redux/feature/auth/authSlice';
import { clearCart } from '../redux/feature/cart/cartSlice';


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutuser()).unwrap(); // Ensure API call succeeds
  
      dispatch(logout()); // ✅ Clears user state
      dispatch(clearCart()); // ✅ Clears cart state
      localStorage.removeItem("user"); // ✅ Remove user from localStorage
      localStorage.removeItem("cart"); // ✅ Remove cart from localStorage
  
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  
  return (
    <>
      <div className="bg-red-600 p-4">
        <h1 className="text-center text-white text-5xl font-extrabold italic hover:text-gray-300 hover:animate-pulse">
          Nexskill Store
        </h1>
      </div>

      <div className="bg-green-700 p-3 flex items-center gap-5 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/postproduct">Post Products</NavLink>
        <NavLink to="/aboutus">About us</NavLink>
        <NavLink to="/contactus">Contact us</NavLink>

        {/* Show Login if user is not logged in, otherwise Logout */}
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button onClick={handleLogout} className="text-white">Logout</button>
        )}

        <NavLink to="/cart" className="relative">
          🛒 Cart <span className="bg-red-500 text-white px-2 py-1 rounded-full">{cartItems.length}</span>
        </NavLink>
      </div>
    </>
  );
};

export default Header;
