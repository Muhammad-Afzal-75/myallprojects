import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/feature/product/productSlice.js";
import { Link } from "react-router-dom";
import { addCartProduct } from "../redux/feature/cart/cartSlice.js";

const Product = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.product); // Ensure correct state access


  const user = useSelector((state) => state.auth.user); // Get user from Redux

  const handleaddcart = (product) => {
    if (!user || !user.data) {
      alert("Please login to add product to cart");
      return;
    }
  
    if (!user.data._id) {
      console.error("User ID is missing"); // Log an error if User._id is missing
      return;
    }
  
    console.log("Adding product to cart:", {
      id: product._id,
      quantity: 1,
      userid: user.data._id,
    });
  
    dispatch(
      addCartProduct({
        productId: product._id,
        quantity: 1,
        userid: user.data._id, // ✅ Corrected user ID access
      })
    );
  };
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <div className="container w-full text-gray-300">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products?.map((product, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4 text-center">
                <div className="p-2 rounded-lg">
                  <Link to={`/${product._id}`}>
                  <img
                    className="h-40 rounded w-48 mx-auto object-cover object-center mb-6 transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={product.image}
                    alt={product.name}
                  />
                  </Link>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {product.name}
                  </h3>
                  <p className="leading-relaxed text-base">
                    {product.description ? product.description.slice(0, 50) : "No description"}
                  </p>
                  {product.quantity > 1 ? (
                    <p>{product.quantity}</p>
                  ) : (
                    <span className="text-red-600">Out of stock</span>
                  )}
                  <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" onClick={()=>handleaddcart(product)}> 
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
