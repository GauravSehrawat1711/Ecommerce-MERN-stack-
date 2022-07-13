import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate=useNavigate();
    React.useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
          navigate('/')
        }
      })
    const handlelogin=async ()=>{
       let result=await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
          }
       });
result=await result.json();
console.log(result)
if(result.name){
    localStorage.setItem('user',JSON.stringify(result))
    navigate('/');
}
else{
    alert("please enter valid data")
}
    }
  return (
    <div className='login'>
        <h1 className='register'>Login</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='inputbox' type="email" placeholder="enter email address"/>
        <input  value={password} onChange={(e)=>setPassword(e.target.value)}  className='inputbox' type="password" placeholder='enter password'/>
        <button onClick={handlelogin} className='appButton' type="buttom">Login</button>
    
    </div>
  )
}

export default Login