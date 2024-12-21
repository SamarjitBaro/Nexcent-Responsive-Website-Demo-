"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/Logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[85px] flex justify-between items-center px-4 md:px-8 bg-gray-100">
        {/* Logo */}
        <Image
          className="h-6 w-36"
          src={logo}
          alt="logo"
          width={1800}
          height={1200.71}
          quality={100}
        />

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="md:flex hidden text-[16px] font-medium font-sans text-[#4d4d4d] gap-7">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <li className="cursor-pointer">Features</li>
            <Link href="/blog">
              <li className="cursor-pointer">Blog</li>
            </Link>
            <li className="cursor-pointer">Community</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>

          {/* Register Button */}
          <button className="bg-[#4caf4f] md:block hidden px-10 py-3 rounded-md">
            <h3 className="font-medium text-white font-sans">
              Register Now --
            </h3>
          </button>

          {/* Hamburger Menu for Mobile */}
          <div
            className="md:hidden block text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 bg-gray-100 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-4 text-[16px] font-medium font-sans text-[#4d4d4d]">
          <Link href="/">
            <li
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </li>
          </Link>
          <li
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            Features
          </li>
          <Link href="/blog">
            <li
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              Blog
            </li>
          </Link>
          <li
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            Community
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            Pricing
          </li>
        </ul>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
