// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import Login from "./Login"; // This should be default import
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const { authUser, logout } = useAuth();
  const [sticky, setSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // You can redirect to search results page or filter content
  };

  const handleLogout = () => {
    logout();
  };

  const navItems = (
    <>
      <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
      <li><Link to="/course" className="hover:text-primary transition-colors">All Books</Link></li>
      <li><Link to="/freebooks" className="hover:text-primary transition-colors">Free Books</Link></li>
      <li><Link to="/paidcourses" className="hover:text-primary transition-colors">Premium Books</Link></li>
      <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
      <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
      {authUser?.isAdmin && (
        <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
      )}
    </>
  );

  return (
    <header>
      <nav
        className={`navbar container max-w-screen-2xl mx-auto px-4 md:px-20 fixed top-0 right-0 left-0 z-50
        ${sticky ? "bg-base-100/95 backdrop-blur-sm shadow-lg transition-all duration-300" : "bg-base-100"}`}
      >
        {/* Left - Logo and Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6" 
                fill="none"
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold text-primary ml-2">
            📚 BookStore
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {navItems}
          </ul>
        </div>

        {/* Right - Search, Theme, Auth */}
        <div className="navbar-end gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Search books..."
                className="input input-bordered input-sm w-40 lg:w-56 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-60 hover:opacity-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <span className="text-xl">☀️</span>
            ) : (
              <span className="text-xl">🌙</span>
            )}
          </button>

          {/* User Auth Section */}
          <div className="flex items-center gap-2">
            {authUser ? (
              <div className="flex items-center gap-3">
                {authUser.isAdmin && (
                  <span className="badge badge-primary badge-sm">Admin</span>
                )}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                      {authUser.name ? authUser.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li className="menu-title">
                      <span>Hello, {authUser.name || 'User'}</span>
                    </li>
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><hr /></li>
                    <li>
                      <button onClick={handleLogout} className="text-error">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => document.getElementById('my_modal_3').showModal()}
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Login Modal */}
        <Login />
      </nav>
    </header>
  );
};

export default Navbar;