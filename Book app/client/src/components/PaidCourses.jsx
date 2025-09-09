// src/components/PaidCourses.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PaidCourses = () => {
  const { authUser } = useAuth();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Redirect to login if not authenticated
  if (!authUser) {
    return <Navigate to="/signup" replace />;
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        // Use VITE_API_BASE_URL instead of VITE_API_URL
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/book?category=paid`);
        setBooks(res.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    (book.name?.toLowerCase().includes(search.toLowerCase()) ||
     book.author?.toLowerCase().includes(search.toLowerCase())) &&
    (filterCategory ? book.category === filterCategory : true)
  );

  const categories = [...new Set(books.map(book => book.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Books</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium books designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-2/5 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by book name or author"
                className="input input-bordered w-full pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <select
              className="select select-bordered w-full md:w-1/4"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            
            <button 
              className="btn btn-outline w-full md:w-auto"
              onClick={() => {
                setSearch("");
                setFilterCategory("");
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="alert alert-error shadow-lg mb-8">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </p>
            <div className="text-sm text-gray-500">
              {search && `Search: "${search}"`} {search && filterCategory && ' • '}
              {filterCategory && `Category: ${filterCategory}`}
            </div>
          </div>
        )}

        {/* Books Grid */}
        {!loading && !error && (
          <>
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <Card key={book._id} item={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-md">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="mt-4 text-xl font-medium text-gray-700">No books found</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
                <button 
                  className="mt-4 btn btn-primary"
                  onClick={() => {
                    setSearch("");
                    setFilterCategory("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PaidCourses;