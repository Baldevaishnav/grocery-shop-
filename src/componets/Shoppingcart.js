import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./Shoppingcart.css";
import Shoppingcart_Product from "./Shoppingcart_Product";
const Shoppingcart = () => {
  return (
    <>
      <div className="mt-10">
        <div>
          <div
            className="w-full bg-slate-500 h-36 text-white flex justify-center text-center items-center"
            style={{ backgroundImage: "url('/img/breadcrumb.jpg')" }}
          >
            <div className="">
              <h1 className="text-5xl font-bold mb-2">Shopping Cart</h1>
              <p classNamemt="text-xl">
                {" "}
                <strong> Home -</strong> <strong> </strong>  shopping cart
                Package
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="">
              <Shoppingcart_Product />
          </div>
         
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
    </>
  );
};

export default Shoppingcart;
