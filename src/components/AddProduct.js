import React, { useState } from 'react'

const AddProduct =  () => {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    // const [error,setError]=useState(false);
    const addProduct= async()=>{
      
    console.log(name,price,category,company)
// if(name ||price|| company || category){
//     setError(true);
//     return false;
// }


    const userId=JSON.parse(localStorage.getItem('user'))._id;
    console.log(userId)
     let result=await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
       headers :{
        'Content-type':'application/json'
       }
    })
    result=await result.json();
    console.log(result)

    }
    console.log("hello")
  return (
    <div className='product'>
        <h1 className='register'>Add Product</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="inputbox" placeholder='Enter product name'/>
     {/* 
     { error && !name &&  <span className='valid_input' >Enter valid name</span>} */}
        <input type="text"  value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputbox" placeholder='Enter product price'/>
        {/* { error && !price &&  <span className='valid_input' >Enter valid price</span>} */}
        <input type="text" value={category} className="inputbox" onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter product category'/>
        {/* { error && !category &&  <span className='valid_input' >Enter valid category</span>} */}
        <input type="text" value={company} className="inputbox" onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter product company'/>
        {/* { error && !company &&  <span className='valid_input' >Enter valid company</span>} */}
        <button onClick={addProduct} className='appButton' type='button'>Add Product</button>
    </div>
  )
}

export default AddProduct