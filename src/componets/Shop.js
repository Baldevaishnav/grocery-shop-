import React from "react";
import "./Shop.css";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import Shop_products from './Shop_products'


const Home = () => {
  const [range, setRange] = React.useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <>
     <div>
      <div className="a flex justify-center gap-10 mt-10">
        <div className="a.1">
          <div>
            <div className="">
              <p className="text-2xl font-bold">Department</p>
              <ul className=" text-md mt-6 text-gray-900 grid grid-cols-1 gap-2">
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
                  <a href="">Papayaya &amp; Crisps</a>
                </li>
                <li>
                  <a href="">Oatmeal</a>
                </li>
              </ul>
            </div><br />
            <div>
              <div>
              <h4 className="text-2xl font-extrabold ">Price</h4><br />
              <div >
                <Slider
                  value={range}
                  onChange={handleChanges}
                  valueLabelDisplay="auto"
                />
                <span className="font-extrabold t">${range[0]} </span> -{" "}
                <span className="font-extrabold"> ${range[1]}</span>
              </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-extrabold mt-8">Colors</h4><br />
                <div className="grid grid-cols-2  ">
                  <div className="flex items-center gap-4 w-fit">
                    <div className="border-2 rounded-full w-fit h-fit border-black p-[5px]  "></div> 
                    <span>White</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="border-2 rounded-full w-fit h-fit  border-gray-600 bg-gray-600  p-[5px] "></div>

                    <span>Gray</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="border-2 rounded-full w-fit h-fit  border-red-600 bg-red-600  p-[5px] "></div>

                    <span>Red</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="border-2 rounded-full w-fit  border-black bg-black h-fit p-[5px] "></div>

                    <span>Black</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="border-2 rounded-full w-fit h-fit border-blue-600  bg-blue-500 p-[5px] "></div>

                    <span>Blue</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="border-2 rounded-full w-fit h-fit border-green-600 bg-green-600 p-[5px] "></div>

                    <span>Green</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold mt-10">Popular Size</h4><br />
              <div className="grid grid-cols-2 gap-4  w-fit text-center text-sm ">
                <span className="bg-gray-200 text-gray-500 p-1">Large</span>
                <span className="bg-gray-200 text-gray-500 p-1">Medium</span>
                <span className="bg-gray-200 text-gray-500 p-1">Small</span>
                <span className="bg-gray-200 text-gray-500 p-1">Tiny</span>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold mt-10">Latest Product</h4><br /> <b />
              <div className="grid grid-rows-3 gap-5">
                    <div className="flex gap-4">
                         <div>
                          <img src="/img/latest-product/lp-1.jpg" alt="" />
                         </div>
                         <div>
                            <p>Crab pool Securtiy</p>
                            <span className="font-extrabold">$30.00</span>
                         </div>
                    </div>
                    <div className="flex gap-4">
                         <div>
                          <img src="/img/latest-product/lp-2.jpg" alt="" />
                         </div>
                         <div>
                            <p>Crab pool Securtiy</p>
                            <span className="font-extrabold">$30.00</span>
                         </div>
                    </div>
                    <div className="flex gap-4">
                         <div>
                          <img src="/img/latest-product/lp-3.jpg" alt="" />
                         </div>
                         <div>
                            <p>Crab pool Securtiy</p>
                            <span className="font-extrabold">$30.00</span>
                         </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="a.2">
          <div>
            <div>
              <h6 className="text-4xl font-bold border-b-4 w-fit border-lime-600 pb-2">Sales off</h6>
              <br />
              <div className="flex justify-center gap-5">
                <div className="text-center">
                  <div className="h-[17rem] w-64" style={{backgroundImage: 'url(/img/product/product-1.jpg)'}}>
                    <div className="bg-red-600 text-white w-fit flex justify-center  px-1 py-2 border-2 rounded-full relative left-4 top">
                      -20%
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">Dry Fruits</p>
                    <p>Rasin's Nuts</p>
                    <span className="font-bold text-lg mr-1">$30:00 </span>
                    <span className="text-sm text-gray-400 font-semibold line-through">
                      $36:00
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-[17rem] w-64" style={{backgroundImage: 'url(/img/product/product-2.jpg)'}}>
                   
                    <div className="bg-red-600 text-white w-fit flex justify-center  px-1 py-2 border-2 rounded-full relative ml-5">
                      -20%
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">Dry Fruits</p>
                    <p>Rasin's Nuts</p>
                    <span className="font-bold text-lg mr-1">$30:00 </span>
                    <span className="text-sm text-gray-400 font-semibold line-through">
                      $36:00
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-[17rem] w-64" style={{backgroundImage: 'url(/img/product/product-3.jpg)'}}>
                    
                    <div className="bg-red-600 text-white w-fit flex justify-center  px-1 py-2 border-2 rounded-full relative ml-5">
                      -20%
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">Dry Fruits</p>
                    <p>Rasin's Nuts</p>
                    <span className="font-bold text-lg mr-1">$30:00 </span>
                    <span className="text-sm text-gray-400 font-semibold line-through">
                      $36:00
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <br />
            <br />
            <br />
            <hr className="text-gray-300" />
          </div>
          <br />
          <br />
          <div>
            <div>
              <div className="flex justify-between">
                <div className="inline-flex gap-2">
                  <h1 className="text-gray-400 font-semibold"> Sort By </h1>
                  <select
                    name="Default"
                    id=""
                    className="border-none outline-none font-bold"
                  >
                    <option
                      value="Default"
                      className="text--gray-500 outline-none bg-white"
                    >
                      Price
                    </option>
                    <option
                      value="price"
                      className="text-black font-bold outline-none "
                    >
                      Defalut
                    </option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">16</span>
                  <p className="text-gray-500">Product Found</p>
                </div>
                <div className="flex gap-2">
                  <div className="text-gray-500">
                    <a href="">
                      <BsFillGridFill />
                    </a>
                  </div>
                  <div className="text-gray-500">
                    <a href="">
                      <AiOutlineBars />
                    </a>
                  </div>
                </div>
              </div>

              <div >
                <Shop_products/>
               
                </div>
                <div className="mt-10 mb-10">
                  <ul className="flex gap-8">
                    <li className="border_li px-2 py-1 border-gray-300  hover:bg-lime-600 w-8 text-center text-gray-500 font-extrabold ">
                      <a href="">1</a>
                    </li>
                    <li className="border_li  px-2 py-1 border-gray-300  hover:bg-lime-600 w-8 text-center text-gray-500 font-extrabold ">
                      <a href="">2</a>
                    </li>
                    <li className="border_li  px-2 py-1 border-gray-300  hover:bg-lime-600 w-8 text-center text-gray-500 font-extrabold ">
                      <a href="">3</a>
                    </li>
                    <li className="border_li  px-2 py-1 border-gray-300  hover:bg-lime-600 w-8 flex justify-center items-center text-gray-500 font-extrabold ">
                      <a href="">
                        <FaLongArrowAltRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
