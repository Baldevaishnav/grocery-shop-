import React from 'react'
import { GrCompare } from "react-icons/gr";
import { IoIosCart } from "react-icons/io";
import { BsFillSuitHeartFill } from "react-icons/bs";
import {DataProduct} from './DataProduct'
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/shoppingcartSlice';

const Shop_products = () => {

   const dispatch = useDispatch();
  return (
    <div className="mt-5 grid grid-cols-3 text-center gap-5">
            {DataProduct.slice(0,9).map((item)=>{
                   return(
                    <div className="mt-6 text-center group z-10 ">
                    <div className="relative overflow-hidden ">
                    <img src={item.img} className="" alt="" />
                    <div className=" flex justify-center gap-3 items-center w-full p-2 -z-0  group-hover:flex absolute -bottom-12 group-hover:bottom-4 right-0 transition-all duration-500 ease-out">
                      <BsFillSuitHeartFill className="bg-white text-[14px] rounded-full w-10 h-10 p-3 border-[1px] border-gray-200 hover:rotate-[360deg] transition-all duration-700" />
                      <GrCompare className="bg-white text-sm rounded-full w-10 h-10 p-3 border-[1px] border-gray-200 hover:rotate-[360deg] transition-all duration-700" />
                      <IoIosCart className="bg-white text-sm rounded-full w-10 h-10 p-3 border-[1px] border-gray-200 hover:rotate-[360deg] transition-all duration-700" onClick={()=>{ dispatch(addTocart(item)) }}/>
                    </div>
                  </div>
                       
                      <p>{item.name}</p>
                      <span className="font-extrabold">${item.price}</span>
                  
                  </div>
                   )
            })}  
    </div>
  )
}

export default Shop_products
