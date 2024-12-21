import React from "react";
import Image from "next/image";
import pictures1 from "../public/images/pictures/image 18.png";
import pictures2 from "../public/images/pictures/image 19.png";
import pictures3 from "../public/images/pictures/image 20.png";
import arrow from "../public/images/Right.png";

const Main4 = () => {
  const pictures = [pictures1, pictures2, pictures3];
  const texts = [
    "Creating Streamlined Safeguarding Processes with OneRen",
    "What are your safeguarding responsibilities and how can you manage them?",

    <>
      Revamping the Membership Model with Triathlon<br></br> Australia
    </>,
  ];
  return (
    <div className=" flex flex-wrap  gap-10 pt-12  justify-center">
      <div className="flex justify-center gap-3 items-center  flex-col">
        <h1 className="font-sans text-[#4d4d4d] text-[36px] text-center leading-[40px] font-semibold">
          Caring is the new marketing
        </h1>
        <p className="w-[45%] text-[#717171]  text-center">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-wrap-reverse justify-center gap-28 md:gap-28 lg:gap-10">
        {pictures.map((item, index) => {
          return (
            <div key={index} className="relative  w-[360px] h-[280px]  ">
              <Image
                src={item}
                quality={100}
                width={450}
                height={60}
                alt="logo"
                // className="  w-[600px] h-[300px] "
              />
              <div className="absolute bg-[#f6f7fa] py-5 w-[300px] flex flex-col items-center justify-start rounded-xl shadow-lg h-[170px] bottom-[-30%] translate-x-[-50%] left-[50%]">
                <h1 className="text-[#717171] font-bold text-[20px] text-center">
                  {texts[index]}
                </h1>
                <div className=" flex  ">
                  <button className="flex gap-2 justify-center items-center">
                    <h2 className=" text-[#4caf4f]  font-sans font-semibold text-[20px] w-auto">
                      Readmore
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
          );
        })}
      </div>
      <div className="pt-32  ">
        <div className="bg-[#f6f7fa]  py-40 flex gap-9 flex-col justify-center items-center h-[280px] w-screen">
          <h1 className="text-center md:leading-[80px] text-[#273239] font-inter font-semibold text-[32px] md:text-[4.5vw] ">
            {" "}
            Pellentesque suscipit<br></br> fringilla libero eu.
          </h1>
          <button className="bg-[#4caf4f] w-[190px] flex items-center justify-center px-10 py-3 rounded-md">
            <h3 className="font-medium text-white">Get a Demo </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main4;
