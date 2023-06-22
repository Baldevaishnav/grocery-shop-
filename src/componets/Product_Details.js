import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import { IoIosCart } from "react-icons/io";
import { BsFillSuitHeartFill } from "react-icons/bs";


import { DataProduct } from "./DataProduct";
import { Link, json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../Redux/shoppingcartSlice";
import {procced} from '../Redux/Shoppingdetail_slice'


const Product_Details = () => {
    
    const { ProductItems } = useSelector(state => state.home)
    const  dispatch = useDispatch();
  
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
        {ProductItems.slice(0,8).map((item) => {
          return (
            <div className="text-center group z-10 ">
              <div className="relative overflow-hidden ">
                <img src={item.img} className="" alt="" />
                <div className=" flex justify-center gap-3 items-center w-full p-2 -z-0  group-hover:flex absolute -bottom-12 group-hover:bottom-4 right-0 transition-all duration-500 ease-out">
                  <BsFillSuitHeartFill className="bg-white text-[14px] rounded-full w-10 h-10 p-3 border-[1px] border-gray-200 hover:rotate-[360deg] transition-all duration-700" />
                  <GrCompare className="bg-white text-sm rounded-full w-10 h-10 p-3 border-[1px] border-gray-200 hover:rotate-[360deg] transition-all duration-700" />
                  <IoIosCart className="bg-white text-sm rounded-full w-10 h-10 p-3 border-[1px] border-gray-200 hover:rotate-[360deg] transition-all duration-700" onClick={()=>{ dispatch(addTocart(item)) }}/>
                </div>
              </div>
              <Link to='ShoppingDetails' className="text-gray-900  text-lg "> {item.name} </Link><br />
               <span className="font-extrabold">${item.price}</span>
              <br />
              {/*  <span className="font-extrabold">$ {item.price }</span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product_Details;
