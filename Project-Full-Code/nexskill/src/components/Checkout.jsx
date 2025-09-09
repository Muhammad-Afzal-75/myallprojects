import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { clearCart, fetchCart } from "../redux/feature/cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  
  // Form State
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "cod",
  });

  useEffect(() => {
    dispatch(fetchCart()); // Load cart on checkout page
  }, [dispatch]);

  // Handle Input Change
  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  // Handle Order Submission
  const handleCheckout = () => {
    if (!billingDetails.name || !billingDetails.email || !billingDetails.address) {
      alert("Please fill in all details!");
      return;
    }

    // Simulate Order Success
    alert("Order placed successfully!");
    
    dispatch(clearCart()); // Empty the cart after order
    navigate("/order-success"); // Redirect after checkout
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>Checkout</h2>

      {/* Billing Details Form */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Billing Details</h3>
        <input type="text" name="name" placeholder="Full Name" value={billingDetails.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={billingDetails.email} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={billingDetails.address} onChange={handleChange} />
        
        <h3>Payment Method</h3>
        <select name="paymentMethod" value={billingDetails.paymentMethod} onChange={handleChange}>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
        </select>
      </div>

      {/* Cart Summary */}
      <div>
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
              <p>{item.name} (x{item.quantity})</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        )}
        <h3>Total: ${totalPrice}</h3>
      </div>

      {/* Checkout Button */}
      <button onClick={handleCheckout} style={{ padding: "10px", background: "green", color: "#fff" }}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
