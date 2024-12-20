import React from "react";
import Image from "next/image";
import logo from "../public/images/Logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="  w-[100%] h-[85px] flex justify-around items-center">
        <Image
          className="h-6 w-36"
          src={logo}
          alt="logo"
          width={1800}
          height={1200.71}
          quality={100}
          // layout="responsive"
        />
        <div className="flex justify-center items-center bg-white gap-6">
          <div>
            <ul className="md:flex hidden text-[16px] font-medium font-sans text-[#4d4d4d] gap-7  ">
              <Link href="/">
                <li className="">Home</li>
              </Link>
              <li>Features</li>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <li>Community</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <button className="bg-[#4caf4f] md:block hidden px-10 py-3 rounded-md">
              <h3 className="font-medium text-white font-sans">
                Register Now --
              </h3>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
