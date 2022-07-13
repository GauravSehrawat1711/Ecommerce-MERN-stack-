import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login'
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';
import Profile from './components/Profile';
const  App=()=> {
  return (
 <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />} >
          <Route path='/' element={<ProductList/>} />
          <Route path='/add' element={<AddProduct/>} />
          <Route path='/update/:id' element={<UpdateProduct/>} />
          {/* <Route path='/login' element={<h1>Login into Product Component</h1>} /> */}
          <Route path='/profile' element={<Profile/>} />
          </Route>
          
          
          <Route path='/signup' element={<SignUp />} />
          <Route path='login' element={<Login/>}/>
        
      </Routes>
    </BrowserRouter><Footer />
    </div>
   
  );
} 

export default App;
