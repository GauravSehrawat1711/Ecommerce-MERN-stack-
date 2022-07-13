import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })
  const collectData=async ()=>{
    console.log(name,email,password)
    let result=await fetch("http://localhost:5000/register",{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json()
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result))
    navigate('/')
  }
  return (
    <div className='sign'>
      <h1 className='register'>Register</h1>
      <input className='inputbox' type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
         
      <input type="email" className='inputbox' placeholder='Enter email'
      value={email} onChange={(e)=>setEmail(e.target.value)}
      />
      
      <input type="password" className='inputbox' placeholder='Enter password'
      value={password} onChange={(e)=>setPassword(e.target.value)}
      />
        <button onClick={collectData} className='appButton' type="buttom">Sign up</button>
        </div>
  )
}

export default SignUp