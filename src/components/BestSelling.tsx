import Image from "next/image";
import Link from "next/link";
import React from "react";
type bestselldata = {
  title: string;
  image: string;
  price: number;
  rating: number;
};

const BestSellData: bestselldata[] = [
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

function BestSelling() {
  return (
    <section className=" px-5 md:px-10 lg:px-16 space-y-10">
      <div className="flex items-center gap-2">
        <div className="border-l-[15px] rounded-md border-[#db4444] text-[#db4444] w-2 h-7"></div>
        <div className="text-[#db4444]">This Month</div>
      </div>
      <div className="flex flex-col gap-y-10 sm:flex-row items-center justify-between">
        <h1 className="font-semibold text-4xl">Best Selling Products</h1>
        <div className="flex items-center justify-center">
          <button className="bg-[#db4444] text-white px-6 sm:px-4 py-2 rounded-md">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {BestSellData.map((val: bestselldata, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 space-y-3"
          >
            <Link href="/prodcut-details" className="bg-[#f5f5f5] relative -10 w-full sm:w-52">
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
            </Link>
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
      {/* SPEAKER  */}
      <div className="bg-black md:flex items-center justify-center">
        {/* LEFT */}
        <div className=" space-y-8 p-5 sm:p-8">
          <p className="text-[#00ff66] text-base">Categories</p>
          <h1 className="text-white text-5xl leading-0">
            Enhance Your Music Experience
          </h1>
          <div className="flex gap-3 sm:gap-5 text-sm">
            <div className="bg-white rounded-full flex flex-col items-center justify-center text-center p-3 w-16 h-16">
              <p className="font-bold">23</p>
              <p>Hours</p>
            </div>
            <div className="bg-white rounded-full flex flex-col items-center justify-center text-center p-3 w-24 sm:w-16 h-16">
              <p className="font-bold">05</p>
              <p>Days</p>
            </div>
            <div className="bg-white rounded-full flex flex-col items-center justify-center text-center p-3 w-16 h-16">
              <p className="font-bold">59</p>
              <p>Minutes</p>
            </div>
            <div className="bg-white rounded-full flex flex-col items-center justify-center text-center p-3 w-16 h-16">
              <p className="font-bold">35</p>
              <p>seconds</p>
            </div>
          </div>
          <div>
            <button className="px-6 py-2 bg-[#00ff66] text-white rounded-md">
              Buy Now!
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <Image
            src={"/images/speaker.png"}
            alt="Speaker IMage"
            width={600}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
