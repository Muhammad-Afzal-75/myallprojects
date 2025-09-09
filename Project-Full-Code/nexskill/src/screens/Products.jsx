import React, { useEffect } from 'react'
// import CardSlider from './Cardslider'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchAllproduct } from '../redux/feature/product';
import { fetchAllProducts } from '../redux/feature/product/productSlice.js';

const Product = () => {
  const {products}= useSelector((state)=>state.productdata)
  // console.log(products)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])
  return (
<div className="container w-full text-gray-300">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
{
  products.length>0 && products.map((product,index)=>(
  
    <div className="xl:w-1/4 md:w-1/2 p-4 text-center">
      <div className="p-2 rounded-lg">
        <img className="h-40 rounded w-46 mx-auto object-cover object-center mb-6 transform transition-transform duration-500 ease-in-out hover:scale-110" src={product.image} alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.name}</h3>
        <p className="leading-relaxed text-base">{product.description !==null ? (product.description.slice(0,50)):"null" }</p>
        {product.quantity > 1 ?  (<p>{product.quantity}</p> 
        ) : <span className='text-red-600'>out of stock</span> }
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add to Cart
        </button>
      </div>
    </div>

  ))
 
}  </div>
  </div>
</section>


  <div className='flex items-center justify-between p-3'>
  <hr className="w-1/3 border-b-2 border-black" />
    <h2 className="text-2xl font-semibold text-gray-900">Popular Products</h2>
    <hr className="w-1/3 border-b-2 border-black" />
  </div>
  <CardSlider/>
</div>




  )
}

export default Product



// value ? "" : " "
// if(){
//   return <p>No products available</p>
// }else{

// }
