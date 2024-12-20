"use client";
import React from "react";
import Image from "next/image";
import logo1 from "../public/images/move-icons/Logo-2.png";
import logo2 from "../public/images/move-icons/Logo-3.png";
import logo3 from "../public/images/move-icons/Logo-4.png";
import logo4 from "../public/images/move-icons/Logo-5.png";
import logo5 from "../public/images/move-icons/Logo-1.png";
import logo6 from "../public/images/move-icons/Logo-6.png";
import logo7 from "../public/images/move-icons/Logo.png";

import image1 from "../public/images/icon2/Icon.png";
import image2 from "../public/images/icon2/Icon-1.png";
import image3 from "../public/images/icon2/Icon-2.png";
import rafiki from "../public/images/mobile-login/rafiki.png";

const Main2 = () => {
  const logos = [logo7, logo5, logo1, logo2, logo3, logo4, logo6];
  const images = [image1, image2, image3];
  const text = [
    "Membership Organisations",
    <>
      National <br /> Associations
    </>,
    <>
      Clubs And <br /> Groups
    </>,
    ,
  ];
  const text2 = [
    "Our membership management software provides full automation of membership renewals and payments",
    "Designed for national associations, our solutions simplify communication, event organization, and member retention.",
    "Easily manage memberships, collect payments, and plan activities for your club or group with our intuitive software.",
  ];

  return (
    <>
      <div className=" gap-12 flex justify-center  py-10 flex-col items-center ">
        <div className="flex justify-center flex-col items-center gap-1  px-8 ">
          <h3 className="font-sans text-[#4d4d4d] text-[36px] font-semibold">
            Our Clients
          </h3>
          <h4 className="text-[#717171]  text-center">
            We have been working with some Fortune 500+ clients
          </h4>
        </div>
        <div className="logos-wrapper-container flex justify-center">
          <div className="flex justify-center scale-20 md:scale-2 gap-4 md:px-0 px-5 md:gap-16 lg:gap-32">
            {/* First set of logos */}
            {logos.map((item, index) => (
              <div key={index} className="">
                <Image
                  src={item}
                  quality={100}
                  width={50}
                  height={50}
                  alt="logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-3 md:mt-7  px-8 ">
        <h3 className="font-sans tracking-wide text-center text-[#4d4d4d] text-[36px] leading-[40px] font-semibold">
          Manage your entire community<br></br> in a single system
        </h3>
        <h4 className="text-[#717171]  text-center">
          Who is Nextcent suitable for?
        </h4>
      </div>
      <div className="flex justify-evenly  flex-wrap py-10 ">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[300px] h-[270px]  mt-5 shadow-md flex justify-center items-center flex-col rounded-xl gap-4"
            >
              <div className=" ">
                <Image
                  src={item}
                  quality={100}
                  width={60}
                  height={60}
                  alt="logo"
                />
              </div>

              <h3 className="font-sans tracking-wide text-center text-[#4d4d4d] text-[28px] leading-[30px] font-bold">
                {text[index]}
              </h3>
              <h4 className="text-[#717171] text-[14px]  px-10 text-center">
                {text2[index]}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="  py-10 flex items-center justify-center ">
        <div className="flex justify-start  flex-wrap gap-12  w-[80%]">
          <Image
            src={rafiki}
            quality={100}
            width={450}
            height={60}
            alt="logo"
            className=" "
          />
          <div className=" md:mt-0 mt-10 flex  items-center  w-[500px]">
            <div className="flex flex-col  gap-5 ">
              <h3 className="font-sans text-[#4d4d4d] text-[36px] leading-[40px] font-semibold">
                The unseen of spending three years at Pixelgrade
              </h3>
              <h4 className="text-[#717171] text-[14px]   ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </h4>
              <button className="bg-[#4caf4f] w-[140px] flex items-center justify-center px-1 py-3 rounded-md">
                <h3 className="font-medium text-white">Learn More</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main2;
