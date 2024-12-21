import React from "react";
import Image from "next/image";
import logo from "../public/images/Footer/Logo.png";
import img1 from "../public/images/Big/Social Icons.png";
import img2 from "../public/images/Big/Social Icons-1.png";
import img3 from "../public/images/Big/Social Icons-2.png";
import img4 from "../public/images/Big/Social Icons-3.png";
const Footer = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div>
      <div className="bg-[#273239] pb-6 flex-wrap-reverse flex h-[300px]">
        <div className="md:w-[44%] mx-auto md:mx-0 flex items-center  justify-center">
          <div className="flex-col  gap-8 flex">
            <Image
              className="h-auto w-52 "
              src={logo}
              alt="logo"
              width={1800}
              height={1200.71}
              quality={100}
              // layout="responsive"
            />
            <h4 className="text-[#f6f7fa] text-[14px]">
              Copyright c 2023 Landify UI Kit. <br></br>All rights reserved
            </h4>
            <div className="flex gap-6">
              {images.map((item, index) => {
                return (
                  <div key={index}>
                    <Image src={item} alt="links" className="h-8 w-auto" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" pt-12  ">
          <div className="  justify-center items-start  flex-wrap gap-16 w-auto flex">
            <div className="text-[#f6f7fa] text-[14px]">
              <h2 className=" text-[20px] mb-4 font-sans font-semibold">
                Company
              </h2>
              <div className="list-none flex flex-col gap-3 text-[14px] font-thin">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </div>
            </div>
            <div className="text-[#f6f7fa] text-[14px]">
              <h2 className="text-[20px] font-sans font-semibold mb-4">
                Support
              </h2>
              <div className="list-none flex flex-col gap-3 text-[14px] font-thin">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </div>
            </div>
            <div>
              <h2 className="text-[20px] text-[#f6f7fa] mb-4 text font-sans font-semibold">
                Stay up to date
              </h2>
              <input
                type="text "
                className="bg-[#515b60] px-3 rounded h-10 w-[230px] text-[14px] text-[#f6f7fa]"
                placeholder="Your email address"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
