import React from 'react'
import '../App.css'
import {Link,useNavigate} from 'react-router-dom'


const Nav = () => {
  const navigate=useNavigate();
const auth=localStorage.getItem('user')
const logout=()=>{
  localStorage.clear();
  navigate('/signup')
}  
return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className='logo' src='https://img.icons8.com/office/2x/shopping-cart.png'alt='logo' />
    
        E-Commerce Dashboard</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {auth?
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Products</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/update">Update </Link>
            </li> */}
            
            <li className="nav-item">
              <Link className="nav-link " to="/profile" >Profile</Link>
            </li>
            <li>  <Link  onClick={logout} className="nav-link " to="/signup" >Logout({JSON.parse(auth).name.toUpperCase()})</Link></li>
            </ul>
            :<ul className="navbar-nav me-auto">
              <li className='nav-item'><Link className="nav-link  " to="/signup" >Sign Up</Link>
              </li>
              <li className='nav-item'><Link className="nav-link " to="/login" >Login</Link></li>
            </ul>
          }
            
         
        </div>
      </div>
    </nav>
  )
}

export default Nav