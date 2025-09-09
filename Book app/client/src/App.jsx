// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import BookDetails from './components/BookDetails';
import { useAuth } from './context/AuthProvider';
import PaidCourses from './components/PaidCourses'; // This should work now
import Course from './components/Course';
import Freebook from './components/Freebook';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuth();
  return authUser ? children : <Navigate to="/signup" replace />;
};

// Admin Protected Route Component
const AdminProtectedRoute = ({ children }) => {
  const { authUser } = useAuth();
  return authUser?.isAdmin ? children : <Navigate to="/signup" replace />;
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { authUser } = useAuth();

  // Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-100 text-base-content min-h-screen transition-colors">
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        } />
       <Route path="/freebooks" element={
  <Freebook requireAuth={true} />
} />
        <Route path="/paidcourses" element={
          <ProtectedRoute>
            <PaidCourses />
          </ProtectedRoute>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={
          <AdminProtectedRoute>
            <Dashboard />
          </AdminProtectedRoute>
        } />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;