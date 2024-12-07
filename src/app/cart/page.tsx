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

function Page() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const countIncrease1 = () => {
    setCount1(count1 + 1);
  };
  const countDecrease1 = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
    }
  };
  const countIncrease2 = () => {
    setCount2(count2 + 1);
  };
  const countDecrease2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
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
              Cart
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-8">
        {/* HEADINGS */}
        <div className="grid grid-cols-4 place-items-center shadow font-semibold rounded-md px-2 sm:px-5 py-4">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* CART ITEMS 1*/}
        <div className="grid grid-cols-4 place-items-center shadow rounded-md px-2 sm:px-5 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-fit ">
            <Image
              src={"/images/led.png"}
              alt="Led Image"
              width={50}
              height={100}
            />
            <h1 className="text-center">LCD Monitor</h1>
          </div>
          <div className="w-fit ">$650</div>
          <div className="flex items-center gap-3 border px-4 py-2 rounded-md w-fit">
            {count1}
            <div className="flex flex-col items-center">
              <button onClick={countIncrease1}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button onClick={countDecrease1}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-fit">$650</div>
        </div>

        {/* CART ITEMS 2 */}
        <div className="grid grid-cols-4 place-items-center shadow rounded-md px-5 py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-fit ">
            <Image
              src={"/images/padgame.png"}
              alt="Led Image"
              width={50}
              height={100}
            />
            <h1 className="text-center">H1 Gamepad</h1>
          </div>
          <div className="w-fit ">$650</div>
          <div className="flex items-center gap-3 border px-4 py-2 rounded-md w-fit">
            {count2}
            <div className="flex flex-col items-center">
              <button onClick={countIncrease2}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button onClick={countDecrease2}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-fit">$650</div>
        </div>

        <div className="flex items-center justify-between">
          <button className="border-2 px-4 py-2">Return To Shop</button>
          <button className="border-2 px-4 py-2">Update Cart</button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-y-16 py-10">
          {/* LEFT */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="border-2 px-8 w-52 py-2">Coupon Code</div>
              <Button
                variant={"outline"}
                className="bg-[#db4444] text-white h-11 w-52"
              >
                Apply Coupon
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-[470px] border-2 border-black p-5 space-y-5">
            <h1 className="font-bold">Cart Total</h1>
            <div className="py-2 border-b-2 flex items-center justify-between">
              <h1>Subtotal:</h1>
              <p>$1750</p>
            </div>
            <div className="py-2 border-b-2 flex items-center justify-between">
              <h1>Shipping:</h1>
              <p>Free</p>
            </div>
            <div className="py-2 flex items-center justify-between">
              <h1>Total</h1>
              <p>$1750</p>
            </div>
            <div className="flex justify-center">
              <Button variant={"outline"} className="bg-[#db4444] text-white">
                Process to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
