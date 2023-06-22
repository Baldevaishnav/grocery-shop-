import React, { useState } from "react";
import "./Checkout.css";
import { json } from "react-router-dom";
import { useSelector } from "react-redux";
import { stringify } from "postcss";
import { BsXLg } from "react-icons/bs";

const CheckOut = (e) => {
  const { total } = useSelector((state) => state.Cart);
  const { cart } = useSelector((state) => state.Cart);

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    address1: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    password: "",
    ordernotes: "",
    checkAccount:false,
  });
  const [Data, setData] = useState([]);
  const nameregex = /^[A-Za-z]+$/;

  const handleInput = (e) => {
    if (!nameregex.test(values.firstname) || values.firstname < 2) {
      document.getElementById("name_error").innerHTML =
        "Please enter firstname";
    } else {
      document.getElementById("name_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const lastnameHandle = (e) => {
    if (!nameregex.test(values.lastname) || values.lastname < 2) {
      document.getElementById("name_error1").innerHTML =
        "Please enter lastname";
    } else {
      document.getElementById("name_error1").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const countryhandle = (e) => {
    let name = "india";
    setValues({ ...values, [e.target.name]: e.target.value });
    let Country_name = e.target.value;
    if (Country_name == "" || !nameregex.test(Country_name)) {
      document.getElementById("country_error").innerHTML =
        "Please enter valid name";
    } else {
      document.getElementById("country_error").innerHTML = "";
    }
  };

  const handleaddress = (e) => {
    if (values.address == "") {
      document.getElementById("address_error").innerHTML =
        "Please enter address";
    } else {
      document.getElementById("address_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleState = (e) => {
    if (values.state == "") {
      document.getElementById("state_error").innerHTML = "Please enter address";
    } else {
      document.getElementById("state_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCity = (e) => {
    if (values.city == "") {
      document.getElementById("city_error").innerHTML = "Please enter address";
    } else {
      document.getElementById("city_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlePostcode = (e) => {
    let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
    if (values.postcode == null || !regex.test(values.postcode)) {
      document.getElementById("postcode_error").innerHTML =
        "Please enter a valid postcode ";
    } else {
      document.getElementById("postcode_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlePhone = (e) => {
    if (values.phone == "" || values.phone.length < 10) {
      document.getElementById("phone_error").innerHTML = "Please enter address";
    } else {
      document.getElementById("phone_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleEmail = (e) => {
    let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (values.email == "" || !emailregex.test(values.email)) {
      document.getElementById("email_error").innerHTML = "Please enter address";
    } else {
      document.getElementById("email_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    const checkaccount = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked});         
    };

  const handlePassword = (e) => {
    if (values.password == "") {
      document.getElementById("password_error").innerHTML =
        "Please enter password";
    } else if (values.password.length < 8) {
      document.getElementById("password_error").innerHTML =
        "password is greater than 8 ";
    } else {
      document.getElementById("password_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleNotes = (e) => {
    if (values.ordernotes == "") {
      document.getElementById("notes_error").innerHTML = "Please enter address";
    } else {
      document.getElementById("notes_error").innerHTML = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault(e);  
      
    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.country === "" ||
      values.address === "" ||
      values.city === "" ||
      values.state === "" ||
      values.postcode === "" ||
      values.phone === "" ||
      values.email === "" ||
      values.password === "" ||
      values.ordernotes === "" ||
      values.checkAccount == ""
    ) {
      alert("Please fill form properly"); 
    } else {
      
      setData([...Data,values]);
      localStorage.setItem("user", JSON.stringify(Data));
      setValues({
        firstname: "",
        lastname: "",
        country: "",
        address: "",
        city: "",
        state: "",
        postcode: "",
        phone: "",
        email: "",
        password: "",
        ordernotes: "",
        checkaccount: "",
      });
    }
     
        if (values.checkAccount == true) {
               alert('Account has created succesfully');

        }
  };

 
  return (
    <>
      <div className=" mt-10">
        <div
          className="w-full bg-slate-500 h-36 text-white flex justify-center text-center items-center"
          style={{ backgroundImage: "url('/img/breadcrumb.jpg')" }}
        >
          <div className="">
            <h1 className="text-5xl font-bold mb-2">CheckOut</h1>
            <p className="text-xl">
              {" "}
              <strong> Home-</strong> <strong> CheckOut</strong>{" "}
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="mx-48 ">
          <div className="bg-gray-100 text-gray-400 text-center p-2 border-t-2 my-5 border-lime-500">
            <span className="text-lg "></span>
            Have a coupon?{" "}
            <a href="#" className="p-1 underline">
              Click here
            </a>{" "}
            to enter your code
          </div>
          <br />
          <div className="border_bottom my-3 ">
            <h1 className="font-extrabold text-xl p-2">Billing Details</h1>
          </div>
          <form action="" onSubmit={Submit}>
            <div className="flex justify-center gap-5">
              <div className="checkout">
                <div className="flex gap-5 my-4 ">
                  <div className="">
                    <label htmlFor="">
                      First Name
                      <samp className="text-red-500 text-sm">*</samp>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="pl-4 h-12 w-[23rem] my-2 input_checkout "
                      name="firstname"
                      value={values.firstname}
                      onChange={handleInput}
                    />{" "}
                    <br />
                    <span
                      id="name_error"
                      className="text-sm text-red-600 font-bold relative bottom-2"
                    ></span>
                  </div>
                  <div>
                    <label htmlFor="">
                      Last Name <samp className="text-red-500 text-sm">*</samp>{" "}
                    </label>
                    <br />
                    <input
                      type="text"
                      className="pl-4 h-12 w-[23rem] my-2 input_checkout"
                      name="lastname"
                      value={values.lastname}
                      // onBlur={lastnameHandle}
                      onChange={lastnameHandle}
                    />{" "}
                    <br />
                    <span
                      id="name_error1"
                      className="text-sm text-red-600 font-bold relative bottom-2"
                    ></span>
                  </div>
                </div>
                <label htmlFor="">
                  Country <samp className="text-red-500 text-sm">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="India"
                  className=" pl-4 h-12 w-full my-4"
                  name="country"
                  value={values.country}
                  onChange={countryhandle}
                />
                <span
                  id="country_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <br />
                <label htmlFor="">
                  Address <samp className="text-red-500 text-sm">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Street address"
                  className="pl-4 h-12  w-full my-4"
                  name="address"
                  value={values.address}
                  onChange={handleaddress}
                />
                <br />
                <input
                  type="text"
                  placeholder="Apartment,Suit,Unite etc"
                  className=" pl-4 h-12 w-full mb-4"
                  name="address1"
                  value={values.address1}
                  onChange={handleaddress}
                />{" "}
                <span
                  id="address_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <br />
                <label>
                  Town / city <samp className="text-red-500 text-sm">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  className=" pl-4 h-12 w-full my-4"
                  name="city"
                  value={values.city}
                  onChange={handleCity}
                />
                <span
                  id="city_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <br />
                <label htmlFor="">
                  Country/State <samp className="text-red-500 text-sm">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  className="pl-4 h-12 w-full my-4"
                  name="state"
                  value={values.state}
                  onChange={handleState}
                />
                <span
                  id="state_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <br />
                <label htmlFor="">
                  postcode /Zip <samp className="text-red-500 text-sm">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  className="pl-4 h-12 w-full my-4"
                  name="postcode"
                  value={values.postcode}
                  onChange={handlePostcode}
                />
                <span
                  id="postcode_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <div className="flex gap-5 my-3">
                  <div className="">
                    <label htmlFor="">
                      Phone <samp className="text-red-500 text-sm">*</samp>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="pl-4 h-12 w-[23rem] my-2 input_checkout"
                      name="phone"
                      value={values.phone}
                      onChange={handlePhone}
                    />{" "}
                    <br />
                    <span
                      id="phone_error"
                      className="text-sm text-red-600 font-bold relative bottom-2"
                    ></span>
                  </div>
                  <div>
                    <label htmlFor="">
                      Email <samp className="text-red-500 text-sm">*</samp>
                    </label>
                    <br />
                    <input
                      type="text"
                      id=""
                      className="pl-4 h-12 w-[23rem] my-2 input_checkout"
                      name="email"
                      value={values.email}
                      onChange={handleEmail}
                    />{" "}
                    <br />
                    <span
                      id="email_error"
                      className="text-sm text-red-600 font-bold relative bottom-2"
                    ></span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className=" mr-2 my-2 input_checkbox"
                  name="checkAccount"
                  onChange={checkaccount}
                  value={values.checkAccount}
                  checked={values.checkAccount}
                 
                />
                <label htmlFor="">Create an Account ?</label>
                <br />
                <p className="text-gray-500">
                  Create an account by entering the information below. If you
                  are a returning customer please login at the <br /> top of the
                  page
                </p>
                <br />
                <label htmlFor="">
                  Account Password{" "}
                  <samp className="text-red-500 text-sm">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  id=""
                  className="pl-4 h-12 w-full "
                  name="password"
                  value={values.password}
                  onChange={handlePassword}
                />
                <br />
                <span
                  id="password_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <br />
                <input
                  type="checkbox"
                  className="mr-2 my-4 input_checkbox mt-2"
                />
                <label htmlFor="">Ship to a Different Address</label>
                <br />
                <label htmlFor="">
                  Order Notes{" "}
                  <samp className="text-red-500 text-sm mt-2">*</samp>
                </label>
                <br />
                <input
                  type="text"
                  id=""
                  placeholder="Notes about your order."
                  className="pl-4 h-12 w-full my-4"
                  name="ordernotes"
                  value={values.ordernotes}
                  onChange={handleNotes}
                />
                <span
                  id="notes_error"
                  className="text-sm text-red-600 font-bold relative bottom-2"
                ></span>
                <br />
              </div>
              <div className="bg-gray-100 p-8 h-fit mt-5 ">
                <div className="">
                  <h1 className="text-2xl font-bold border_bottom my-3 ">
                    Your Order
                  </h1>

                  <div className="font-bold text-lg">
                    Products
                    <span className="float-right">Totals</span>
                  </div>

                  <ul className="border_bottom text-gray-500">
                    {cart.map((item) => {
                      return (
                        <li className=" my-3 ">
                          {item.name}
                          <span className="float-right  font-extrabold">
                            $ {item.subtotal}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="  font-bold my-3 border_bottom text-lg">
                    Subtotal
                    <span className="float-right">${total}</span>
                  </div>
                  <div className="font-bold border_bottom my-3 text-lg ">
                    Total
                    <span className="float-right">${total}</span>
                  </div>

                  <div>
                    <input type="checkbox" className="input_checkbox" />

                    <label htmlFor="" className="text-black text-[17px] mr-2">
                      Create an account ?
                    </label>
                    <br />
                  </div>
                  <p className="my-3 text-gray-500">
                    Create an account by entering the information below. If you
                    are a returning customer please login at the <br /> top of
                    the page
                  </p>
                  <div className="my-2">
                    <input
                      type="checkbox"
                      placeholder="Check payment"
                      className="mr-2 input_checkbox"
                    />
                    <label htmlFor="" className="text-black text-[17px]">
                      Check payment
                    </label>
                    <br />
                  </div>
                  <input type="checkbox" className="input_checkbox" />
                  <label htmlFor="" className="text-black ml-2 text-[17px] ">
                    Paypal
                  </label>
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="bg-lime-600 w-full p-3 font-bold text-lg text-white tracking-widest"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
