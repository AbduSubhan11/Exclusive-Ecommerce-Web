"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [isHamburger, setIsHamburger] = useState(false);

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };
  const toggleMenu = () => {
    setIsHamburger(false);
  };

  return (
    <header className="flex flex-col max-w-full z-20 sticky top-0 border-b-2 bg-[#FFFFFF]">
      <div className=" bg-black px-6 md:px-10 lg:px-16 pb-5 text-white hidden sm:flex items-center justify-between">
        <div className="flex items-center justify-end text-sm w-[70%] gap-3">
          <h1>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <Link href={"/"} className="underline font-bold">
            ShopNow
          </Link>
        </div>
        <div>
          <select className="text-white bg-black outline-none">
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-16 pt-5 pb-2">
        {/* NAV HEADING         */}
        <div>
          <h1 className="font-bold font-sans text-3xl">Exclusive</h1>
        </div>
        {/* NAV LINKS       */}
        <nav
          className={`md:space-x-6 font-semibold text-base ${
            isHamburger
              ? "flex flex-col right-0 top-0 h-screen w-52 py-20 px-5 absolute space-y-5 border bg-white"
              : "lg:flex hidden"
          }`}
        >
          <Link
            href="/"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/" ? "text-black underline" : ""
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/contact" ? "text-black underline" : " "
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/about" ? "text-black underline" : " "
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            About
          </Link>
          <Link
            href="/signup"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/signup" ? "text-black underline" : " "
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Sign Up
          </Link>
        </nav>

        <div
          className={`relative flex justify-center items-center  gap-10 ${
            isHamburger ? "top-[330px]" : ""
          }`}
        >
          <div className="hidden md:flex items-center bg-gray-200 h-10">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-200 px-5 w-full"
            />
            <svg
              className="h-6 w-8 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="10" cy="10" r="7" />{" "}
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
          {/* SEARCH CONTACT CART DIV       */}
          <div
            className={`relative flex justify-center items-center md:space-x-2`}
          >
            {/* HEART ICON */}
            <Link
              href="/wishlist"
              onClick={toggleMenu}
              className={`${isHamburger ? "top-[330px]" : ""}`}
            >
              <svg
                className="h-6 w-8 hover:text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
              </svg>
            </Link>

            {/* CART ICON         */}
            <Link
              href="/cart"
              className={`${isHamburger ? "top-[330px]" : ""}`}
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-8 hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden z-20">
          <button
            className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
            onClick={hamburHandler}
          >
            <span
              className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
                isHamburger ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-[3px] w-full bg-black transition-opacity duration-300 ease-in-out ${
                isHamburger ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
                isHamburger ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
