import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const Dashboard = () => {
  const { authUser } = useAuth();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [activeTab, setActiveTab] = useState("books");

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/book`);
      setBooks(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch books");
      showToast("Failed to fetch books", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      setUsers(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
      showToast("Failed to fetch users", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "books") {
      fetchBooks();
    } else if (activeTab === "users") {
      fetchUsers();
    }
  }, [activeTab]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.title || !formData.price || !formData.category) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    try {
      if (isEditing) {
        const response = await axios.put(`${API_URL}/book/${currentBookId}`, formData);
        setBooks(books.map((book) => (book._id === currentBookId ? response.data : book)));
        showToast("Book updated successfully!", "success");
      } else {
        const response = await axios.post(`${API_URL}/book`, formData);
        setBooks([...books, response.data]);
        showToast("Book added successfully!", "success");
      }

      setFormData({
        name: "",
        title: "",
        price: "",
        category: "",
        image: "",
        description: "",
      });
      setIsEditing(false);
      setCurrentBookId(null);
    } catch (err) {
      showToast(`Failed to ${isEditing ? "update" : "add"} book`, "error");
    }
  };

  const handleEdit = (book) => {
    setFormData({
      name: book.name,
      title: book.title,
      price: book.price,
      category: book.category,
      image: book.image || "",
      description: book.description || "",
    });
    setIsEditing(true);
    setCurrentBookId(book._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`${API_URL}/book/${id}`);
        setBooks(books.filter((book) => book._id !== id));
        showToast("Book deleted successfully!", "success");
      } catch (err) {
        showToast("Failed to delete book", "error");
      }
    }
  };

  const toggleUserAdmin = async (userId, isAdmin) => {
    try {
      const response = await axios.put(
        `${API_URL}/admin/user/${userId}/admin`,
        { isAdmin: !isAdmin },
        {
          headers: {
            Authorization: `Bearer ${authUser.token}`,
          },
        }
      );

      setUsers(users.map((user) => (user._id === userId ? response.data.user : user)));
      showToast(response.data.message, "success");
    } catch (err) {
      showToast("Failed to update user admin status", "error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-md shadow-lg ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {toast.message}
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "books" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("books")}
        >
          Manage Books
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "users" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("users")}
        >
          Manage Users
        </button>
      </div>

      {/* Books Section */}
      {activeTab === "books" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">{isEditing ? "Edit Book" : "Add New Book"}</h2>
          <form onSubmit={handleSubmit} className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Book Name" className="input input-bordered w-full" required />
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" className="input input-bordered w-full" required />
              <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" className="input input-bordered w-full" required />
              <input type="text" name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" className="input input-bordered w-full" required />
              <input type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" className="input input-bordered w-full" />
              <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="textarea textarea-bordered w-full md:col-span-2" />
            </div>
            <button type="submit" className="btn btn-primary mt-4">{isEditing ? "Update Book" : "Add Book"}</button>
          </form>

          <h2 className="text-2xl font-bold mb-4">Books List</h2>
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book._id}>
                      <td>{book.name}</td>
                      <td>{book.title}</td>
                      <td>${book.price}</td>
                      <td>{book.category}</td>
                      <td>
                        <button onClick={() => handleEdit(book)} className="btn btn-sm btn-warning mr-2">Edit</button>
                        <button onClick={() => handleDelete(book._id)} className="btn btn-sm btn-error">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Users Section */}
      {activeTab === "users" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Users List</h2>
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.isAdmin ? "Admin" : "User"}</td>
                      <td>
                        <button 
                          onClick={() => toggleUserAdmin(user._id, user.isAdmin)} 
                          className="btn btn-sm btn-info"
                        >
                          {user.isAdmin ? "Remove Admin" : "Make Admin"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;