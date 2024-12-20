import React from "react";
import logo1 from "../public/images/Icons/Icon.png";
import logo2 from "../public/images/Icons/Icon-1.png";
import logo3 from "../public/images/Icons/Icon-2.png";
import logo4 from "../public/images/Icons/Icon-3.png";
import Image from "next/image";
import pana from "../public/images/mobile-login 2/pana.png";
const Main3 = () => {
  const images = [logo1, logo2, logo3, logo4];
  const Numbers = ["2,245,341", "46,234", "828,576", "1,926,436"];
  const details = ["Members", "Clubs", "Event-booking", "Payments"];
  return (
    <div>
      <div className="flex justify-center bg-[#f6f7fa] py-12 flex-wrap">
        <div className=" md:w-[50%] mb-10 md:mb-0 flex flex-col justify-center items-center">
          <div className="flex px-4 md:px-0 flex-col gap-3">
            <h1 className="text-[32px] ">
              <span className="mb-5 font-sans text-[#4d4d4d]  md:text-[36px] leading-[40px] font-semibold">
                Helping a local
              </span>
              <br />{" "}
              <span className="font-sans text-[#4caf4f] md:text-[36px] leading-[40px] font-semibold">
                business reinvent itself
              </span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
        </div>
        <div className="md:w-[50%] ">
          <div className=" md:w-[80%] gap-10  grid md:grid-cols-2 ">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex items-center  w-[50%]  gap-4 "
                >
                  <Image
                    src={item}
                    alt="logos"
                    quality={100}
                    className="object-contain w-12 h-12"
                  />
                  <div className="">
                    <h1 className="text-[#4d4d4d] text-[28px] font-sans tracking-wide  font-bold">
                      {Numbers[index]}
                    </h1>
                    <h5 className="text-[#717171]">{details[index]}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="  py-10 flex items-center justify-center ">
        <div className="flex justify-start  flex-wrap gap-12  w-[80%]">
          <Image
            src={pana}
            quality={100}
            width={450}
            height={60}
            alt="logo"
            className=" "
          />
          <div className=" md:mt-0 mt-10 flex  items-center  w-[500px]">
            <div className="flex flex-col  gap-5 ">
              <h3 className="font-sans text-[#4d4d4d] text-[36px] leading-[40px] font-semibold">
                How to design your site footer like we did
              </h3>
              <h4 className="text-[#717171] text-[14px]   ">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </h4>
              <button className="bg-[#4caf4f] w-[140px] flex items-center justify-center px-1 py-3 rounded-md">
                <h3 className="font-medium text-white">Learn More</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
