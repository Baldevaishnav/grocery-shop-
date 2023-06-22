import React, { useState } from "react";
import "./Navbar.css";
import ShoppingDetails from "./ShoppingDetails";
import shop from "./Shop";
import Page from "./Page";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaUserAlt,
  FaHeart,
  FaShoppingBag,
  FaPhoneAlt,
  FaBars,
  FaAngleDown,
  FaEnvelope,
} from "react-icons/fa";

import { BsFillEnvelopeFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.Cart);
  const { total } = useSelector((state) => state.Cart);
  const [show, setShow] = useState(false);
  const open_sidelist = () => {
    setShow(!show);
  };
  return (
    <div>
      <header>
        <div className="top_header ">
          <div className="flex justify-between mx-5 mt-3 hidden ">
            <div className="text-2xl">Baldev</div>
            <div className="bg-white border-[1px] p-1">
              <FaBars className="text-xl" />
            </div>
          </div>
          <div className="row flex justify-around  bg-gray-100 p-3 max-lg:hidden ">
            <div className=" font-gray-300 ">
              <ul className="text-sm flex">
                <li className="p-1">
                  <FaEnvelope />
                </li>
                <li className=" after:content-['|'] after:text-gray-300  after:ml-4 after:mr-4 ">
                  vaishnavbaldev@gmail.com
                </li>
                <li className="">Free Shipping for all Order of $99 </li>
              </ul>
            </div>
            <div className="second_row flex gap-5 item-center ">
              <div className="share flex gap-7 items-center after:content-['|'] after:text-gray-300 after:font-thin ">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaPinterestP />
              </div>
              <div className="language flex justify-center gap-2 after:content-['|'] after:text-gray-300 after:font-thin">
                <img
                  className="h-3 w-5 m-auto"
                  src="/img/language.png"
                  alt="images"
                />
                <span className="">English</span>
              </div>
              <div className="">
                <Link to="login" className="flex gap-2">
                  <FaUserAlt className="text-sm m-auto " /> Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-5 ">
        <div className="bottom_header flex  justify-around gap-x-10  mt-7 max-lg:justify-center ">
          <div className="">
            <h1 className="max-lg:hidden">Baldev</h1>
          </div>
          <div className="bottom_header_1 max-lg:hidden">
            <ul className="flex justify-center gap-10 ">
              <li>
                <Link to="home">HOME</Link>
              </li>
              <li>
                <Link to="shop">SHOP</Link>
              </li>
              <li className=" ">
                <Link to="" className="peer ">
                  PAGE
                </Link>
                <ul className="hidden absolute -z-0  peer-hover:flex hover:flex w-[200px] flex-col peer-hover:transition-all duration-1000 ease-out bg-gray-900 text-white p-2">
                  <Page />
                </ul>
              </li>

              <li>
                <Link to="about">BLOG</Link>
              </li>
              <li>
                <Link to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2  ">
            <div className="m-auto flex">
              <Link to="">
                <FaHeart />
              </Link>
              <div className="bg-[#7fad39] h-[13px] w-[13px] text-[10px] text-center font-bold inline-block rounded-[50%] text-white relative -top-1">
                <span>1</span>
              </div>
            </div>
            <div className=" m-auto flex">
              <Link to="shoppingcart">
                <FaShoppingBag />
              </Link>

              <div className="bg-[#7fad39] h-[13px] w-[13px] text-[10px] text-center font-bold inline-block rounded-[50%] text-white relative -top-1">
                <span>{cart.length}</span>{" "}
              </div>

              {/* height: 13px;
    width: 13px;
    background: #7fad39;
    font-size: 10px;
    color: #ffffff;
    line-height: 13px;
    text-align: center;
    font-weight: 700;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -12px;  */}
            </div>
            <div className="">
              <strong>items: {total}</strong>
              <span className="font-bold ">$</span>
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex justify-center gap-x-10 max-lg:grid grid-cols-1 gap-5 
        "
        >
          <div className="all_department ">
            <div className="bg-lime-600 text-white  p-4 h-fit flex items-center gap-3 all_department_btn max-lg:justify-between ">
              <div className="flex gap-2 ">
                <div className="m-auto">
                  <FaBars />
                </div>
                <span className="font-bold text-xl ">All Deparments </span>
              </div>

              <div className=" " onClick={open_sidelist}>
                <FaAngleDown className="m-auto" />
              </div>
            </div>
            {show ? (
              <div className="items border-x-2 w-[14.3rem] absolute  border-b-2 transition-all duration-[2s] ease-out max-lg:relative">
                <ul className="items_name p-4 text-lg text-gray-900 bg-white ">
                  <li>
                    <a href="">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="">Vegetable</a>
                  </li>
                  <li>
                    <a href="">Fruits &amp; Nut Gifts</a>
                  </li>
                  <li>
                    <a href="">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="">Oceans Foods</a>
                  </li>
                  <li>
                    <a href="">Butter &amp; Eggs</a>
                  </li>
                  <li>
                    <a href="">Fastfood</a>
                  </li>
                  <li>
                    <a href="">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="">Papayaya &amp; Crips</a>
                  </li>
                  <li>
                    <a href="">Oatmeal</a>
                  </li>
                  <li>
                    <a href="">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div className="flex gap-4  ">
              <div className="searchBar  flex justify-around  ">
                <div className="flex border-y-2 borderb-2 border-l-2 items-center">
                  <div className="flex items-center">
                    <span className=" text-black ml-5 font-bold text-xl   ">
                      All categories
                    </span>
                    <span>
                      <i className="fa-solid fa-angle-down ml-3 after:content-['|'] after:ml-3 after:text-2xl after:text-gray-500" />
                    </span>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="h-14 w-[26rem] text-gray-600 border-none outline-none max-xl:w-[11rem] max-lg:w-[13rem]  "
                      placeholder="  what do u need?"
                    />
                  </div>
                </div>

                <div>
                  <button className="bg-lime-600 text-white h-16 w-32 border-lime-600 border-2">
                    Search
                  </button>
                </div>
              </div>
              <div className="flex  gap-3 max-lg:hidden ">
                <div className="border-2 bg-gray-100 rounded-full p-3 h-fit">
                  <FaPhoneAlt />
                </div>
                <div className="">
                  <span className="font-bold">+91 8980242101 </span>
                  <br />
                  <span className="text-sm  text-gray-500 flex justify-center">
                    support 24/7 time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
