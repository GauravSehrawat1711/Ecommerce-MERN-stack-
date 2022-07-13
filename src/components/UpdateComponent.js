import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
const UpdateProduct =  () => {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
   getProductDetails()
    },[])
    const getProductDetails=async ()=>{
        // console.log(params)
   let result=await fetch(`http://localhost:5000/product/${params.id}`);
   result=await result.json();
//    console.log(result);
  setName(result.name);
  setPrice(result.price)
  setCategory(result.category)
  setCompany(result.company)
    }
    const updateProduct= async()=>{
       
    // console.log(name,price,category,company)
     let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-type':'Application/json'
        }
     });
     result=await result.json();
    //  console.log(result)
     navigate('/')

    }
   
    
  return (
    <div className='product'>
        <h1 className='register'>Update Product</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="inputbox" placeholder='Enter product name'/>
       <input type="text"  value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputbox" placeholder='Enter product price'/>
        <input type="text" value={category} className="inputbox" onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter product category'/>
        <input type="text" value={company} className="inputbox" onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter product company'/>
        <button onClick={updateProduct} className='appButton' type='button'>Update Product</button>
    </div>
  )
}


export default UpdateProduct;