import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2 style={{ color: "green" }}>🎉 Order Placed Successfully! 🎉</h2>
      <p>Thank you for your purchase. Your order has been placed and is being processed.</p>
      
      <button 
        onClick={() => navigate("/")} 
        style={{ padding: "10px 20px", background: "blue", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
