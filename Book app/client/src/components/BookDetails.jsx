import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/book/${id}`);
        console.log("Book API response:", response.data);

        setBook(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch book details");
        setLoading(false);
      }
    };

    if (id) fetchBook();
  }, [id, API_URL]);

  const handleBuyNow = () => {
    if (!authUser) {
      document.getElementById('my_modal_3').showModal();
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = async (paymentData) => {
    try {
      console.log("Processing payment:", paymentData);
      alert("Payment successful! Thank you for your purchase.");
      setShowPayment(false);
    } catch (err) {
      alert("Payment failed. Please try again.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!book) return <p className="text-center text-gray-600">Book not found</p>;

  const bookImage = book.image || book.Image || "/placeholder-image.jpg";

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
      >
        ← Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={bookImage}
            alt={book.title || "Book Cover"}
            className="object-contain h-64 md:h-96 w-full rounded-lg border"
            onError={(e) => (e.target.src = "/placeholder-image.jpg")}
          />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold">{book.title || book.name}</h1>
          {book.author && <p className="text-lg text-gray-700">Author: {book.author}</p>}
          {book.category && <p className="text-gray-600">Category: {book.category}</p>}
          {book.description && <p className="text-gray-600">{book.description}</p>}
          <p className="text-xl font-semibold text-green-600">Price: ${book.price}</p>

          <button
            onClick={handleBuyNow}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Buy Now - ${book.price}
          </button>
        </div>
      </div>

      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Payment Details</h3>
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setShowPayment(false)}
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Book: {book.title || book.name}</p>
              <p className="font-semibold">Total: ${book.price}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const paymentData = {
                  bookId: book._id,
                  bookName: book.title || book.name,
                  price: book.price,
                  cardNumber: formData.get("cardNumber"),
                  expiry: formData.get("expiry"),
                  cvv: formData.get("cvv"),
                };
                handlePayment(paymentData);
              }}
            >
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Card Number</span>
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label">
                    <span className="label-text">Expiry Date</span>
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">CVV</span>
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setShowPayment(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Pay ${book.price}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;