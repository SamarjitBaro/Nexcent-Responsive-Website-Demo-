"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import logo from "../public/images/Illustration.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Main1 = () => {
  console.log(logo);
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]} // Import required modules
        direction="horizontal" // Ensures horizontal layout
        spaceBetween={20} // Space between slides
        slidesPerView={1}
        pagination={{ clickable: true }} // Enables pagination dots
        loop={true} // Infinite loop
        className="mySwiper md:h-[570px]  bg-[#f6f7fa]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex py-16 items-center flex-wrap justify-center w-full h-full">
            <div className="flex items-center gap-9 md:gap-0 justify-center md:flex-row flex-col md:w-[80vw] ">
              <div className="flex flex-col justify-center md:items-start items-center gap-6 w-full">
                <h1 className=" text-[8vw] md:text-[4.6vw] font-sans font-semibold text-[#4d4d4d] md:leading-[76px]">
                  Lessons and insights
                  <br />
                  <span className="text-[#4caf4f]">from 8 years</span>
                </h1>
                <div className="px-8 md:px-0 ">
                  <h4 className="font-thin inline-block text-center   mx-0 m-auto md:px-0 text-[#717171]">
                    Where to grow your business as a photographer: site or
                    social media?
                  </h4>
                </div>
                <button className="bg-[#4caf4f] w-[120px] flex items-center justify-center px-10 py-3 rounded-md">
                  <h3 className="font-medium text-white">Register</h3>
                </button>
              </div>
              <div className="w-[40vw] h-full relative">
                <Image
                  className="h-auto w-[30vw]"
                  src={logo}
                  alt="logo"
                  width={1800}
                  height={1200.71} // Ensures the image fills the container's width and height
                  quality={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex py-16 items-center flex-wrap justify-center w-full h-full">
            <div className="flex items-center gap-9 md:gap-0 justify-center md:flex-row flex-col md:w-[80vw] ">
              <div className="flex flex-col justify-center md:items-start items-center gap-6 w-full">
                <h1 className=" text-[8vw] md:text-[4.6vw] font-sans font-semibold text-[#4d4d4d] md:leading-[76px]">
                  Lessons and insights
                  <br />
                  <span className="text-[#4caf4f]">from 8 years</span>
                </h1>
                <div className="px-8 md:px-0 ">
                  <h4 className="font-thin inline-block  text-center  mx-0 m-auto md:px-0 text-[#717171]">
                    Where to grow your business as a photographer: site or
                    social media?
                  </h4>
                </div>
                <button className="bg-[#4caf4f] w-[120px] flex items-center justify-center px-10 py-3 rounded-md">
                  <h3 className="font-medium text-white">Register</h3>
                </button>
              </div>
              <div className="w-[40vw] h-full relative">
                <Image
                  className="h-auto w-[30vw]"
                  src={logo}
                  alt="logo"
                  width={1800}
                  height={1200.71} // Ensures the image fills the container's width and height
                  quality={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main1;
