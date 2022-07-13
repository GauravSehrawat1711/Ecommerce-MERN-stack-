import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };


 const deleteProduct=async (id)=>{
    console.log(id)
    let result=await fetch(`http://localhost:5000/product/${id}`,{
        method:'delete'
    });
    result=await result.json();
    if(result){
        alert("product Deleted")
        getProduct();
    }

    
 }
 const handleSearch=async (e)=>{
   let key=e.target.value;
   if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`);
    result=await result.json();
    if(result){
      setProducts(result);
    }
   }else{
    getProduct()
   }
   
 }
  return (
    <div className="product-list">
   <h3>ProductList</h3>
   <input type="text"  className="search-product-box" onChange={handleSearch} placeholder='Search Product'/>
   <ul>
    <li>Item No</li>
    <li>Item Name</li>
    <li>Item Price</li>
    <li>Item Category</li>
    <li>Item Company</li>
    <li>Operation</li>
   </ul>
   {
    products.length>0?products.map((item,index)=>
    <ul key={item._id}>
    <li>{index+1}</li>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.category}</li>
    <li>{item.company}</li>
    <li><button  className="delete" onClick={()=>deleteProduct(item._id)}>Delete</button><Link to={"update/"+item._id}>Update</Link>  </li>
  
   </ul>

    )
    :<h1>No Product Found</h1>
   }
    </div>
  );
};

export default ProductList;
