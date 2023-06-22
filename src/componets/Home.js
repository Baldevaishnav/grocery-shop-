import React, { useState } from "react";
// import { DataProduct } from ".../DataProduct";
import "./Home.css";
import { Link } from "react-router-dom";
import { DataProduct } from "../componets/DataProduct";
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
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

import { BsFillEnvelopeFill } from "react-icons/bs";
import Product_Details from "./Product_Details";
import { type } from "@testing-library/user-event/dist/type";
import { orange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  getall,
  getorange,
  getmeat,
  getfood,
  getvegetable,
} from "../Redux/HomeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product_display from "./Product_display";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center pl-5">
        <div
          className=" mt-5 bg-gray-100 w-[60%] relative left-[8rem] p-12   max-lg:w-full left-0 mr-5"
          style={{ backgroundImage: "url(/img/hero/banner.jpg)" }}
        >
          <h6 className="text-lime-700 text-sm font-bold spacing ">
            FRUIT FRESH
          </h6>
          <p className="text-5xl font-bold font-style">
            Vegetable
            <br />
            100% Organic
          </p>
          <br />
          <p className="font-medium text-gray-700">
            Free Pickup and Delivery Available
          </p>
          <br />
          <button className="bg-lime-600 p-4">SHOP NOW</button>
        </div>
      </div>


      <div className="mt-12 mx-3 flex justify-center gap-2">

        <div className=" flex items-center">
          <span className="border-[1px] h-fit py-6  ">
            <FaAngleLeft className="text-xl" />
          </span>
        </div>
      
       <div className="grid grid-cols-4 gap-8">

          <div className="">
          <img src="/product images/cat-3.jpeg" alt="" srcSet="" />
          <div className="text-2xl relative -top-14  mx-3 py-1 text-center bg-white max-lg:-top-12 text-xl">
            Vegetable
          </div>
        </div>
        <div className="max-sm:hidden">
          <img src="/product images/cat-4.jpeg" alt="" srcSet="" />
          <div className="text-2xl relative -top-14 mx-3 py-1 text-center bg-white max-lg:-top-12 text-xl">
            Drink Friuts
          </div>
        </div>
        <div className="max-md:hidden">
          <img src="/product images/cat-5.jpeg" alt="" srcSet="" />
          <div className="text-2xl relative -top-14  mx-3 py-1 text-center bg-white max-lg:-top-12 text-xl">
            Meat
          </div>
        </div>
        <div className="max-lg:hidden">
          <img src="/product images/cat-1.jpeg" alt="" srcSet="" />
          <div className="text-2xl relative -top-14  mx-3 py-1 text-center bg-white ">
            Fresh Fruit
          </div>
        </div>
    </div>
          <div className=" flex items-center">
            <span className="border-[1px] h-fit py-6  ">
              <FaAngleRight className="text-xl" />
            </span>
          </div>
        
      </div>
      <h1 className="text-center text-4xl font-bold">Featured Product</h1>
      <hr className="border-2 border-lime-600 w-24 m-auto mt-2  text-lime-600 " />
      <br />
      <br />
      <div className="">
        <ul className="flex justify-center gap-10 ">
          <li>
            <a
              href=""
              className=" p-1 hover:border-b-2 border-lime-600"
              onClick={(e) => {
                e.preventDefault();
                dispatch(getall());
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              href=""
              className=" p-1 hover:border-b-2 border-lime-600"
              onClick={(e) => {
                e.preventDefault();
                dispatch(getorange());
              }}
            >
              orange
            </a>
          </li>
          <li>
            <a
              href=""
              className=" p-1 hover:border-b-2 border-lime-600"
              onClick={(e) => {
                e.preventDefault();
                dispatch(getmeat());
              }}
            >
              Fresh Meat
            </a>
          </li>
          <li>
            <a
              href=""
              className=" p-1 hover:border-b-2 border-lime-600"
              onClick={(e) => {
                e.preventDefault();
                dispatch(getvegetable());
              }}
            >
              Vegetable
            </a>
          </li>
          <li>
            <a
              href=""
              className=" p-1 hover:border-b-2 border-lime-600"
              onClick={(e) => {
                e.preventDefault();
                dispatch(getfood());
              }}
            >
              Fastfood
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex justify-center  mt-10 ">
          <Product_Details className="" />
        </div>
        <div className="mt-20 flex justify-center gap-10">
          <div>
            <img src="/product images/banner-1.jpeg" alt="" />
          </div>
          <div>
            <img src="/product images/banner-2.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center max-lg:justify-start ml-10 ">
        <div className="grid grid-cols-3 gap-16 mt-20 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="grid grid-cols-1 gap-6  ">
            <div className="flex justify-center gap-6 ">
              <p className="font-bold text-xl text-center ">Latest Products</p>
              <div className="flex gap-2 max-md:relative left-1/2 ">
                <span className="bg-gray-100  p-1 flex items-center border-2">
                  <FaAngleLeft className="text-sm" />
                </span>
                <span className="bg-gray-100 p-1 flex items-center  border-2">
                  {" "}
                  <FaAngleRight className="text-sm " />
                </span>
              </div>
            </div>
            <div className=" flex  gap-2 justify-center  ">
              <img src="/product images/lp-1.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-2.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-3.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 ">
            <div className="flex gap-6 justify-center">
              <p className="font-bold text-xl">Top Rated Products</p>
              <div className="flex gap-2 max-md:relative left-1/2  ">
                <span className="bg-gray-100  p-1 flex items-center  border-2">
                  <FaAngleLeft className="text-sm" />
                </span>
                <span className="bg-gray-100 p-1 flex items-center  border-2">
                  <FaAngleRight className="text-sm " />
                </span>
              </div>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-1.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-2.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-3.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 w-fit">
            <div className="flex gap-6 justify-center">
              <p className="font-bold text-xl">Review Products</p>
              <div className="flex gap-2 max-md:relative left-1/2   ">
                <span className="bg-gray-100  p-1 flex items-center  border-2">
                  <FaAngleLeft className="text-sm" />
                </span>
                <span className="bg-gray-100 p-1 flex items-center  border-2">
                  <FaAngleRight className="text-sm " />
                </span>
              </div>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-1.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-2.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
            <div className=" flex  gap-2 justify-center">
              <img src="/product images/lp-3.jpeg" alt="" />
              <span className="">
                crab Pool Security <br /> <strong>$30</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h1 className="text-5xl text font-bold text-center ">From The Blog</h1>
        <br /> <br /> <br />
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-5 mx-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="text-gray-500">
              <img src="/product images/blog-1.jpeg" alt="" />
              <br />
              <ul className="flex gap-5">
                <li>
                  <i className="fa-solid fa-bag-shopping" /> May 4, 2019
                </li>
                <li>
                  <i className="fa-sharp fa-regular fa-comment" />5
                </li>
              </ul>
              <p className="font-bold text-xl  text-black mt-2">
                Cooking tips make cooking simple{" "}
              </p>
              <p className="mt-2">
                Sed quia non numquam modi tempora indunt ut <br /> labore et
                dolore magnam aliquam quaerat
              </p>
            </div>
            <div className="text-gray-500">
              <img src="/product images/blog-2.jpeg" alt="" />
              <br />
              <ul className="flex gap-5">
                <li>
                  <i className="fa-solid fa-bag-shopping" /> May 4, 2019
                </li>
                <li>
                  <i className="fa-sharp fa-regular fa-comment" />5
                </li>
              </ul>
              <p className="font-bold text-xl text-black mt-2 ">
                6 way to Prepare breakfast for 30{" "}
              </p>
              <p className="mt-2">
                Sed quia non numquam modi tempora indunt ut <br /> labore et
                dolore magnam aliquam quaerat
              </p>
            </div>
            <div className="text-gray-500">
              <img src="/product images/blog-3.jpeg" alt="" />
              <br />
              <ul className="flex gap-5">
                <li>
                  <i className="fa-solid fa-bag-shopping" /> May 4, 2019
                </li>
                <li>
                  <i className="fa-sharp fa-regular fa-comment" />5
                </li>
              </ul>
              <p className="font-bold text-xl text-black mt-2">
                Visit the clean farm in the US
              </p>
              <p className="mt-2">
                Sed quia non numquam modi tempora indunt ut <br /> labore et
                dolore magnam aliquam quaerat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
