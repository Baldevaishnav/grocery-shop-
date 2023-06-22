import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../Redux/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
const Loginpage = () => {
        const dispatch = useDispatch();
        const [value,setvalue] = useState([]);
             
  return (
    <div className='mt-10'>
         <div className=''>
         <div
          className="w-full bg-slate-500 h-36 text-white flex justify-center text-center items-center"
          style={{ backgroundImage: "url('/img/breadcrumb.jpg')" }}
        >
          <div className="">
            <h1 className="text-5xl font-bold mb-2">Login</h1>
            <p className="text-xl">
              {" "}
              <strong> Home-</strong> <strong> Account</strong>{" "}
            </p>
          </div>
        </div>
      <div className='flex justify-center mt-10 '>
      <div className='bg-gray-100 p-6 w-[40%]'>
               <input type="text"  placeholder='Email' id="email_login" className='w-full h-14 p-1 border-[1px] outline-none hover:border-gray-800 hover:border-[1px] ' name="email" value={value.email} onChange={(e)=>{setvalue({...value, [e.target.name]: e.target.value })}} /> <br /><br />
               <input type="text"  placeholder='password' id="password_login" className='w-full h-14 p-1 border-[1px]  outline-none hover:border-gray-800 hover:border-[1px]' name="password" value={value.password} onChange={(e)=>{setvalue({...value, [e.target.name]: e.target.value })}} /> <br /><br />
               <button className='bg-lime-600 p-3 text-white font-bold hover:bg-lime-500' onClick={()=>{dispatch(Login(value))}}>SIGN IN</button> <br /><br />
               <hr className='p-1' />

               <div className='flex  justify-between gap-5'>
                  <Link  className= 'text-gray-700 hover:text-lime-700 font-semibold'>Forgot your password?</Link>
                   <li>
                  <Link to="registerpage" className='text-gray-700 hover:text-lime-700 font-semibold'> Create account</Link>

                   </li>
                  <Link className= 'text-gray-700 hover:text-lime-700 font-semibold'>Return to Store</Link>
               </div>
      </div>
      </div>
      

         </div>
    </div>
  )
}

export default Loginpage
