import React from "react";

const Register_page = () => {
  return (
    <div className="mt-10">
      <div
        className="w-full bg-slate-500 h-36 text-white flex justify-center text-center items-center"
        style={{ backgroundImage: "url('/img/breadcrumb.jpg')" }}
      >
        <div className="">
          <h1 className="text-5xl font-bold mb-2">Register</h1>
          <p className="text-xl">
            {" "}
            <strong> Home-</strong> <strong> Account</strong>{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-gray-100 p-10 rounded-md w-fit ">
          <h1 className="border-b-2 border-lime-600 w-3 text-xl font-bold ">
            Register
          </h1>
          <br />
          <form action="" className="flex justify-center">
            <div>
              <div className="flex gap-3">
                <div>
                  <label htmlFor="" className="font-semibold">
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your name"
                    id=""
                    className="border-[1px] border-b-2 rounded-md p-1   placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-semibold">
                    User Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your username"
                    id=""
                    className="border-[1px] border-b-2 rounded-md p-1 placeholder:text-gray-300"
                  />
                </div>
              </div>
              <br />
              <div className="flex gap-3">
                <div>
                  <label htmlFor="" className="font-semibold">
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your Email"
                    id=""
                    className="border-[1px] border-b-2 rounded-md p-1 placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-semibold">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your number"
                    id=""
                    className="border-[1px] border-b-2 rounded-md p-1 placeholder:text-gray-300"
                  />
                </div>
              </div>{" "}
              <br />
              <div className="flex gap-3">
                <div>
                  <label htmlFor="" className="font-semibold">
                    Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your password"
                    id=""
                    className="border-[1px] border-b-2 rounded-md p-1 placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-semibold">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="Confirm your password"
                    id=""
                    className="border-[1px] border-b-2 rounded-md p-1 placeholder:text-gray-300"
                  />
                </div>
              </div>
              <br />
              <button className="bg-lime-600 text-white w-full p-1">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register_page;
