import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from './Shop'
import Error from "./Error";
import Contact from './Contact';
import Blog from './Blog';
import Shop from './Shop';
import Page from './Page';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import ShoppingDetails from './ShoppingDetails';
import Shoppingcart from './Shoppingcart';
import CheckOut from './CheckOut';
import Loginpage from './Loginpage';
import Register_page from './Register_page';

const Main = () => {
 
  return (
    <div>
          <BrowserRouter>
           <Navbar /> 
           <Routes>
               <Route path="/" element= {<Home/>}/> 
               <Route path="" element= {<Home/>}/> 
               <Route path="/Home" element ={<Home/>}/> 
               <Route path="/Shop" element = {<Shop/>}/> 
               <Route path="/shoppingDetails" element = {<ShoppingDetails/>} /> 
               <Route path="/shoppingcart" element = {<Shoppingcart/>} />
               <Route path="/checkout" element = {<CheckOut/>}/> 
               <Route path="/shoppingcart/checkout" element = {<CheckOut/>}/> 
               <Route path="/Login/registerpage" element = {<Register_page/>}/> 
               <Route path="/Contact" element = {<Contact/>}/> 
               <Route path="/Login" element = {<Loginpage/>}/> 
               <Route path="/*" element = {<Error/>}/>
           </Routes>
           <Footer/>
      </BrowserRouter>
     
    </div>
  )
}

export default Main