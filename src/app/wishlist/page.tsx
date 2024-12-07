import Image from "next/image";
import Link from "next/link";
import React from "react";
type wishlistdata = {
  title: string;
  image: string;
  price: number;
};

const WishListData: wishlistdata[] = [
  {
    title: "The north coat",
    image: "/images/coat.png",
    price: 260,
  },
  {
    title: "Gucci duffle Bag",
    image: "/images/bag.png",
    price: 960,
  },
  {
    title: "RGB liquid CPU Cooler",
    image: "/images/cpu.png",
    price: 160,
  },
  {
    title: "Small BookShelf",
    image: "/images/book shelf.png",
    price: 360,
  },
];
function page() {
  return (
    <section className=" px-5 md:px-10 lg:px-16 py-16 space-y-10">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Wishlist</h1>
          </div>
          <div className=" py-1 sm:py-2 px-4 text-base border border-black ">
            <h1>Move To All Bag</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {WishListData.map((val: wishlistdata, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 space-y-3"
            >
              <Link
                href={"/product-details"}
                className="bg-[#f5f5f5] relative w-full sm:w-52"
              >
                <div className="absolute w-full h-full flex justify-end bg-transparent p-2">
                  <div>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="white" />
                      <path
                        d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714"
                        stroke="black"
                        strokeWidth="1.56"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <Link
                  href={"/cart"}
                  className="absolute z-20 bottom-0 rounded-md px-4 py-2 w-full bg-black text-center text-white"
                >
                  Add to Cart
                </Link>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border-l-[15px] rounded-md border-[#db4444] text-[#db4444] w-2 h-7"></div>
            <div className="text-[#db4444]">Just for you</div>
          </div>
          <div className="border px-8 py-4">
            <h1>See All</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {WishListData.map((val: wishlistdata, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 space-y-3"
            >
              <Link
                href={"/product-details"}
                className="bg-[#f5f5f5] relative w-full sm:w-52"
              >
                <div className="absolute w-full h-full flex justify-end bg-transparent p-2">
                  <div>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="white" />
                      <path
                        d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714"
                        stroke="black"
                        strokeWidth="1.56"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <Link
                  href={"/cart"}
                  className="absolute z-20 bottom-0 rounded-md px-4 py-2 w-full bg-black text-center text-white"
                >
                  Add to Cart
                </Link>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
