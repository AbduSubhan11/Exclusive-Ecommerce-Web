import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type exploredataproduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
};
const ExploreProductData: exploredataproduct[] = [
  {
    id: 1,
    title: "Breed Dry Dog ",
    price: 120,
    image: "/images/dog food.png",
    rating: 88,
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    price: 960,
    image: "/images/dslr.png",
    rating: 75,
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    price: 370,
    image: "/images/gaming laptop.png",
    rating: 99,
  },
  {
    id: 4,
    title: "Curology Product Set",
    price: 375,
    image: "/images/Curology Product.png",
    rating: 99,
  },
  {
    id: 5,
    title: "Kids Electric Car",
    price: 50,
    image: "/images/electric car.png",
    rating: 85,
  },
  {
    id: 6,
    title: "Jr. Zoom Soccer Cleats",
    price: 220,
    image: "/images/soccer shoes.png",
    rating: 90,
  },
  {
    id: 7,
    title: "GP11 Shooter USB Gamepad",
    price: 320,
    image: "/images/USB Gamepad.png",
    rating: 80,
  },
  {
    id: 8,
    title: "Quilted Satin Jacket",
    price: 150,
    image: "/images/satin jacket.png",
    rating: 70,
  },
];

function ExploreProducts() {
  return (
    <section className=" px-5 md:px-10 lg:px-16 ">
      <div className="border-b py-10 space-y-5">
        <div className="flex items-center gap-2">
          <div className="border-l-[15px] rounded-md border-[#db4444] text-[#db4444] w-2 h-7"></div>
          <div className="text-[#db4444]">Our Products</div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-16">
          <h1 className="font-semibold text-4xl">Explore Our Products</h1>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {[...ExploreProductData, ...ExploreProductData].map(
              (val: exploredataproduct, index: number) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/5 "
                >
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="flex flex-col items-center justify-center p-6 space-y-3">
                        <Link
                          href={"/product-details"}
                          className="bg-[#f5f5f5] rounded-md relative group w-72 sm:w-52 cursor-pointer"
                        >
                          <Link
                            href={"/cart"}
                            className="absolute z-20 bottom-0 rounded-md px-4 py-2 w-full bg-black text-center text-white opacity-0 group-hover:opacity-100"
                          >
                            Add to Cart
                          </Link>
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
                        <div className="flex flex-col justify-start items-start w-72 sm:w-52">
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
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block left-[80%] md:left-[82%] lg:left-[85%] xl:left-[90%] -top-9" />
          <CarouselNext className="hidden sm:block right-6 md:right-[70px] lg:right-16 xl:right-10 -top-9" />
        </Carousel>
        <div className="flex items  -center justify-center">
          <button className="bg-[#db4444] text-white px-4 py-2 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreProducts;
