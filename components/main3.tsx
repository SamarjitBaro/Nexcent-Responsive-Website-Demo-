import React from "react";
import logo1 from "../public/images/Icons/Icon.png";
import logo2 from "../public/images/Icons/Icon-1.png";
import logo3 from "../public/images/Icons/Icon-2.png";
import logo4 from "../public/images/Icons/Icon-3.png";
import Image from "next/image";
import pana from "../public/images/mobile-login 2/pana.png";
import logos from "../public/images/image 9.png";
import frame from "../public/images/Frame 10.png";
import arrow from "../public/images/Right.png";
const Main3 = () => {
  const images = [logo1, logo2, logo3, logo4];
  const Numbers = ["2,245,341", "46,234", "828,576", "1,926,436"];
  const details = ["Members", "Clubs", "Event-booking", "Payments"];
  return (
    <>
      <div>
        <div className="flex justify-center bg-[#f6f7fa] py-12 flex-wrap">
          <div className=" md:w-[50%] mb-10 md:mb-0 flex flex-col justify-center items-center">
            <div className="flex px-4 md:px-10 lg:px-0 flex-col gap-3">
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
          <div className="md:w-[50%]  ">
            <div className=" md:w-[80%] gap-10 md:gap-16 lg:gap-10  grid md:grid-cols-2 ">
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
                      <h1 className="text-[#4d4d4d] text-[28px] md:text-[3vw] lg:text-[28px] font-sans tracking-wide  font-bold">
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
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </h4>
                <button className="bg-[#4caf4f] w-[140px] flex items-center justify-center px-1 py-3 rounded-md">
                  <h3 className="font-medium text-white">Learn More</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:pt-10 py-10 md:py-0 items-start gap-16 flex-wrap  bg-[#f6f7fa]">
          <div>
            <Image
              src={logos}
              quality={100}
              width={450}
              height={100}
              alt="logo"
              className="h-[350px] w-auto"
            />
          </div>
          <div className=" w-[80%] md:w-[55%]  flex flex-col gap-3">
            <div className=" py-2 ">
              <div className="flex flex-col gap-3">
                <h3 className="text-[#717171] font-semibold font-sans">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                  Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                  in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                  Morbi laoreet elit at ligula molestie, nec molestie mi
                  blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse eget lorem eu turpis
                  vestibulum pretium. Suspendisse potenti. Quisque malesuada
                  enim sapien, vitae placerat ante feugiat eget. Quisque
                  vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </h3>
                <h2 className="text-[#4caf4f] font-sans font-semibold text-[20px]">
                  Tim Smith
                </h2>
                <h3 className="text-[#89939e] font-normal font-sans">
                  British Dragon Boat Racing Association
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <Image
                src={frame}
                quality={100}
                width={450}
                height={60}
                alt="logo"
                className=" h-12 w-auto"
              />
              <div className="md:p-20 lg:p-0">
                <button className="flex gap-2 items-center">
                  <h2 className=" text-[#4caf4f] font-sans font-semibold text-[20px] w-auto">
                    Meet all customers
                  </h2>
                  <Image
                    src={arrow}
                    quality={100}
                    width={450}
                    height={60}
                    alt="logo"
                    className=" h-6 w-auto "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main3;
