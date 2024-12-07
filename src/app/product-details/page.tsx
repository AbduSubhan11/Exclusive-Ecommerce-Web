"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type relateditemdata = {
  title: string;
  image: string;
  price: number;
  rating: number;
};

const RelatedItemData: relateditemdata[] = [
  {
    title: "The north coat",
    image: "/images/coat.png",
    price: 260,
    rating: 65,
  },
  {
    title: "Gucci duffle Bag",
    image: "/images/bag.png",
    price: 960,
    rating: 65,
  },
  {
    title: "RGB liquid CPU Cooler",
    image: "/images/cpu.png",
    price: 160,
    rating: 65,
  },
  {
    title: "Small BookShelf",
    image: "/images/book shelf.png",
    price: 360,
    rating: 65,
  },
];
function Page() {
  const [count, setCount] = useState(1);
  const countIncrement = () => {
    setCount(count + 1);
  };
  const countDecreament = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <section className="px-5 md:px-10 lg:px-16 py-16 space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="contact" className="text-black">
              Havic HV G-92 Gamepad
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT */}
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <Image
              src={"/images/detail1.png"}
              alt="Image1"
              width={170}
              height={170}
            />
            <Image
              src={"/images/detail2.png"}
              alt="Image1"
              width={170}
              height={170}
            />
            <Image
              src={"/images/detail3.png"}
              alt="Image1"
              width={170}
              height={170}
            />
            <Image
              src={"/images/detail4.png"}
              alt="Image1"
              width={170}
              height={170}
            />
          </div>

          <div>
            <Image
              src={"/images/detail page image.png"}
              alt="Image1"
              width={500}
              height={130}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-96 space-y-3">
          {/* PRODUCT DETAILS */}
          <div>
            <h1 className="font-bold text-2xl">Havic HV G-92 Gamepad</h1>
            <div className="flex items-center gap-3">
              <Image
                src={"/images/rating.png"}
                alt="Rating Image"
                width={90}
                height={100}
              />
              <p className="text-gray-500">(150 Reviews)</p>
              <span className="text-gray-500">|</span>
              <p className="text-[#00ff66]">In Stock</p>
            </div>
            <h1>$192.00</h1>
            <div className="text-sm  py-3 border-b-2">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </div>
          </div>
          {/* PRODUCT COLOR */}
          <div className="flex items-center gap-3 ">
            <h1>Colours:</h1>
            <svg
              width="48"
              height="20"
              viewBox="0 0 48 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="6" fill="#A0BCE0" />
              <circle cx="10" cy="10" r="9" stroke="black" strokeWidth="2" />
              <circle cx="38" cy="10" r="10" fill="#E07575" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <div className="border-2 flex items-center gap-5">
              <Button variant={"ghost"} onClick={countDecreament}>
                -
              </Button>
              <h1>{count}</h1>
              <Button variant={"ghost"} onClick={countIncrement}>
                +
              </Button>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="bg-[#db4444] text-white w-32"
              >
                Buy Now
              </Button>
            </div>
          </div>

          {/* DELIEVERY DETAIL */}
          <div className="border-2 rounded-md border-[#808080] flex flex-col">
            <div className="p-3 flex gap-4 border-b-2 border-[#808080]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_261_4843)">
                  <path
                    d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11.8182H11.6667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.81836 15.4545H8.48503"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 19.0909H11.6667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4843">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h1>Free Delivery</h1>
                <p className="underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="p-3 flex gap-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_261_4865)">
                  <path
                    d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4865">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h1>Return Delivery</h1>
                <p>
                  Free 30 Days Delivery Return.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED ITEMS */}
      <div>
        <div className="flex items-center gap-2">
          <div className="border-l-[15px] rounded-md border-[#db4444] text-[#db4444] w-2 h-7"></div>
          <div className="text-[#db4444]">Related Items</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {RelatedItemData.map((val: relateditemdata, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 space-y-3"
            >
              <div className="bg-[#f5f5f5] relative -10 w-full sm:w-52">
                <div className="absolute w-full h-full flex justify-end bg-transparent p-2">
                  <div>
                    <svg
                      width="34"
                      height="76"
                      viewBox="0 0 34 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="white" />
                      <path
                        d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="17" cy="59" r="17" fill="white" />
                      <path
                        d="M26.257 57.962C26.731 58.582 26.731 59.419 26.257 60.038C24.764 61.987 21.182 66 17 66C12.818 66 9.236 61.987 7.743 60.038C7.51239 59.7411 7.3872 59.3759 7.3872 59C7.3872 58.6241 7.51239 58.2589 7.743 57.962C9.236 56.013 12.818 52 17 52C21.182 52 24.764 56.013 26.257 57.962V57.962Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 62C18.6569 62 20 60.6569 20 59C20 57.3431 18.6569 56 17 56C15.3431 56 14 57.3431 14 59C14 60.6569 15.3431 62 17 62Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-10">
                  <Image
                    src={val.image}
                    alt={val.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start w-full sm:w-52">
                <h1>{val.title}</h1>
                <h1 className="text-[#DB4444]">${val.price}</h1>
                <div className=" flex items-center gap-2 ">
                  <Image
                    src={"/images/rating.png"}
                    alt="rating"
                    width={80}
                    height={100}
                  />
                  <h1 className="text-gray-400">({val.rating})</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
