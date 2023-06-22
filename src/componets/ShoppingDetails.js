import React from "react";
import "./ShoppingDetails.css";
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
  FaStarHalfAlt,
  FaStar,
} from "react-icons/fa";
import { AiOutlineHeart, AiFillStar, AiOutlineInstagram } from "react-icons/ai";
import { Breadcrumbs } from "@mui/material";

const ShoppingDetails = () => {
  return (
    <>
      <div>
        <div className="mt-10">

              <div className="w-full bg-slate-500 h-36 text-white flex justify-center text-center items-center"  style={{ backgroundImage: "url('/img/breadcrumb.jpg')" }} >
                      <div className="" >
                      <h1 className="text-5xl font-bold mb-2">Vegatable's Package</h1>
                      <p classNamemt="text-xl"> <strong> Home-</strong> <strong> vegetable-</strong> Vegatable's Package</p>
                      </div>
              </div><br /><br />
          <div className="flex justify-center gap-10">
            <div>
              <img
                src="/img/product/details/product-details-4.jpg"
                className=""
                alt=""
              />
              <div className="flex justify-between mt-3">
                <div>
                  <img src="/img/product/details/thumb-1.jpg" alt="" />
                </div>
                <div>
                  <img src="/img/product/details/thumb-2.jpg" alt="" />
                </div>
                <div>
                  <img src="/img/product/details/thumb-3.jpg" alt="" />
                </div>
                <div>
                  <img src="/img/product/details/thumb-4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold ">Vegetable's Package</h1>
              <div className="flex items-center my-3">
                <span className="text-yellow-400 flex text-sm  ">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  <FaStarHalfAlt />
                </span>
                <span className="text-red-500 ">(18 reviews)</span>
              </div>
              <span className="text-red-500  text-3xl ">$50.00</span>
              <br /> 
              <p className="text-gray-500 mt-3">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ac diam sit <br />
                amet quam vehicula elementum sed sit amet dui. Sed porttitor
                lectus nibh. <br />
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin <br />
                eget tortor risus.
              </p><br /><br />
              <div className="flex gap-2 ">
                <div className=" bg-gray-200 w-36  flex items-center justify-around text-gray-500 font-bold">
                  <button className="p-3 w-10">-</button>
                  <span className="">0</span>
                  <button className="  w-10">+</button>
                </div>
                <div className="">
                  <button className=" h-14 text-white font-extrabold text-lg p-3 bg-lime-500 w-40">
                    ADD TO CART
                  </button>
                </div>
                <div className="">
                  <button className="  bg-gray-200 h-14 w-12 text-xl flex justify-center items-center ">
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
              <br />
              <br />
              <hr className="" />
              <div className="grid grid-cols-2 w-fit mt-4 ">
                <div className="grid grid-cols-1 details_margin w-fit">
                  <b className="font-bold text-lg ">Availability</b>
                  <b className="font-bold text-lg">Shipping</b>
                  <b className="font-bold text-lg">Weight</b>
                  <b className="font-bold text-lg">Share on</b>
                </div>
                <div className="grid grid-cols-1 details_margin ">
                  <span>In Stock</span>
                  <span className="">
                    01 day shipping.{" "}
                    <b className="text-red-700">Free pickup today</b>{" "}
                  </span>
                  <span> 0.5 kg</span>
                  <span>
                    <ul className="flex gap-4">
                      <li>
                        <FaFacebookF />
                      </li>
                      <li>
                        <FaTwitter />
                      </li>
                      <li>
                        <AiOutlineInstagram />
                      </li>
                      <li>
                        <FaPinterestP />
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>

          </div>
      </div><br /><br /><br />
  <div className="flex justify-center">
         <div className="">
         <div>
            <fieldset class="border-t-2 border-slate-300">
              <legend class="mx-auto  text-white ">
                <ul className="flex justify-center gap-20 text-sm font-bold text-gray-400 p-4   ">
                  <li className="hover:text-gray-600">
                    <a href="">Desciption</a>
                  </li>
                  <li className="hover:text-gray-600">
                    <a href="">Information</a>
                  </li>
                  <li className="hover:text-gray-600">
                    <a href="">
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
              </legend>
            </fieldset>
          </div><br /><br />

          <div className="text">
            <h1 className="text-xl font-bold mb-2  ">Products Infomation</h1>
            <p className="text-md">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Pellentesque in ipsum id orci porta dapibus. Proin eget
              tortor risus. Vivamus suscipit tortor eget <br />
              felis porttitor volutpat. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec rutrum congue leo eget
              malesuada. Vivamus suscipit tortor eget <br />
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, <br />
              auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin
              eget tortor risus. <br />
            </p>
          </div><br /><br />

          <div>
            <div >
                <div className=" flex justify-center ">
              <h3 className="text-3xl font-bold w-fit text-center border-b-4 pb-4 border-lime-400  border-black">
                Related Product
              </h3>
              </div><br /><br />
              <div className="flex justify-center gap-10">
                <div className="text-center">
                  <img src="/img/product/product-1.jpg" alt="" />
                  <p>Crab Pool Security</p>
                  <span className="font-extrabold">$30.00</span>
                </div>
                <div className="text-center">
                  <img src="/img/product/product-2.jpg" alt="" />
                  <p>Banana</p>
                  <span className="font-extrabold">$30.00</span>
                </div>
                <div className="text-center">
                  <img src="/img/product/product-3.jpg" alt="" />
                  <p>Guava</p>
                  <span className="font-extrabold">$30.00</span>
                </div>
                <div className="text-center">
                  <img src="/img/product/product-4.jpg" alt="" />
                  <p>Black Grapes</p>
                  <span className="font-extrabold">$30.00</span>
                </div>
              </div>
            </div>
          </div>
         </div>
         </div>
         
    </>
  );
};

export default ShoppingDetails;
