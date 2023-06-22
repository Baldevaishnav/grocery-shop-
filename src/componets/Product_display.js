import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { DataProduct } from "./DataProduct";
import { height } from "@mui/system";
const Product_display = () => {
  return (
    <div className=" ml-10 ">
         <div className=" flex items-center">
            <span className="border-[1px] h-fit py-6  ">
            <FaAngleLeft className="text-xl" />
          </span>
            </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        // navigation
        // autoplay={{ delay: 2000 }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="grid grid-cols-4 "
      >
        {DataProduct.map((item) => {
          return (
            <SwiperSlide className="w-fit" >
               <div className="w-fit">
               <img src={item.img} alt="" className="" />
              <div className="text-2xl relative -top-12 py-1 mx-3 text-center bg-white max-lg:-top-12 text-xl">
                {item.type}
              </div>
               </div>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
        <div className=" flex items-center">
            <span className="border-[1px] h-fit py-6  ">
            <FaAngleRight className="text-xl" />
          </span>
            </div>
    </div>
  );
};

export default Product_display;
