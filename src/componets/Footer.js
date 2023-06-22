import React, { useState } from 'react'

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaHeart,
  FaShoppingBag,
  FaPhoneAlt,
  FaBars,
  FaAngleDown,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
   const [email,setEmail] = useState();
   const handlemail =(e)=>{
    let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if ( !emailregex.test(email)) {
         document.getElementById('email_error').innerHTML = "Enter valid email !"
    }else{
      document.getElementById("email_error").innerHTML = ""

    }
         setEmail(e.target.value);
           

   }
  return (
    <div>
      <div className="bg-[#F3F6FA]  mt-20">
    <div className="footer text-gray-900 grid grid-cols-3 gap-10 p-16 max-md:grid-cols-2 gap-5">
      <div className='flex justify-center '>
        <div className=''>
         
        <h1 className="font-bold text-3xl text-black"> Baldev</h1>
        <br />
        <ul className='text-sm'>
          <li className="mt-2">Address : 60-49 Road 11378 New York</li>
          <li className="mt-2">Phone: +65 11.188.888</li>
          <li className="mt-2"> Email : hello@vaishnav.com</li>
        </ul>
        </div> 
      </div>
      <div className="flex justify-center  gap-7">
        <ul className="Usefullinks text-sm ">
          <h className="text-black font-bold text-md mt-3">Useful Links</h>
          <li className="mt-1">
            <a href="">About us</a>
          </li>
          <li>
            <a href="">About your shop</a>
          </li>
          <li>
            <a href="">secure shopping</a>
          </li>
          <li>
            <a href="">Delivery infomation</a>
          </li>
          <li>
            <a href="">privacy policy</a>{" "}
          </li>
          <li>
            <a href="">Our Sitemap</a>
          </li>
        </ul> 
        <ul className="Usefullinks text-sm ">
          <br />
          <li>
            <a href="">Who We Are</a>
          </li>
          <li>
            <a href="">Our Service</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
          <li>
            <a href="">Inovation</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
        </ul>
      </div>
    

      
      <div className='max-lg:col-span-2'>
          
        <h1 className="text-black font-bold text-md mb-3">
          Join Our Newsletter Now
        </h1>
        <p className='text-sm  text-gray-800'>Get E-mail updates about our latest shop and special offers.</p>
        <br />

        {/* <input type="text" className='w-60' /> */}
        <input
          type="text"
          className="text-gray-400 p-3 w-60 outline-none max-lg:w-[80%]  "
          placeholder="Enter your mail"
          onChange={handlemail}
        />
        <button className="bg-lime-500 font-bold text-white p-3">
          SUBSCRIBE
        </button> <br />
         <span id='email_error' className='text-red-600 text-sm'></span>
        <div className="mt-10 ">
          <ul className="flex  gap-6">
            <li className=' p-3 border-2 rounded-full bg-white hover:bg-lime-600 hover:text-white'>
            <FaFacebookF/>
            </li>
            <li className=' p-3 border-2 rounded-full bg-white hover:bg-lime-600  hover:text-white'>
            <FaInstagram/>
            </li>
            <li className=' p-3 border-2 rounded-full bg-white hover:bg-lime-600  hover:text-white'>
            <FaTwitter/>
            </li>
            <li className=' p-3 border-2 rounded-full bg-white hover:bg-lime-600  hover:text-white'>
            <FaPinterestP/>
            </li>
       
          </ul>
        </div>

      </div>
      </div>
    </div>
    <hr className="mb-2" /> 
    <div className="">
      <ul className="flex justify-between">
        <li>Copyright ©2023 All rights reserved</li>
        <li>
          <img src="/product images/payment-item.png" alt="" />
        </li>
      </ul>
    </div><br />
  </div>
    
  )
}

export default Footer
