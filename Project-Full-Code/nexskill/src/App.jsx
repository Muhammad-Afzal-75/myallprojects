import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Header from './components/Header';
import Postproduct from './components/PostProduct';
import Product from './screens/Products';
import SingleProduct from './screens/SingleProduct';
import Signupform from './components/Signup';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Router>
        <Header />
        <Routes>
    
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/postproduct" element={user ? <Postproduct /> : <Navigate to="/login" />} />
          <Route path="/products" element={<Product />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route  path='/order-success' element={<OrderSuccess/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
