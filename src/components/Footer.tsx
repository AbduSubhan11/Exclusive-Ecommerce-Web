import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 lg:px-16 py-16 space-y-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl">Exclusive</h1>
          <p className="text-1xl">Subscribe</p>
          <p className="text-base">Get 10% off your first code</p>
          <div className="flex items-center border w-fit px-2 rounded-md">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full bg-transparent pl-2 h-12"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.912 11.9998H4L2.023 4.1348C2.01034 4.0891 2.00263 4.04216 2 3.9948C1.978 3.2738 2.772 2.7738 3.46 3.1038L22 11.9998L3.46 20.8958C2.78 21.2228 1.996 20.7368 2 20.0288C2.00203 19.9655 2.01314 19.9029 2.033 19.8428L3.5 14.9998"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl">Support</h1>
          <p className="text-1xl">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-1xl">exclusive@gmail.com</p>
          <p className="text-1xl">+88015-88888-9999</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl">Account</h1>
          <p className="text-1xl">My Account</p>
          <p className="text-1xl">Login / Register</p>
          <p className="text-1xl">Cart</p>
          <p className="text-1xl">Wishlist</p>
          <p className="text-1xl">Shop</p>
        </div>
        <div className="space-y-4">
          <h1 className=" text-2xl">Quick Link</h1>
          <p className="text-1xl">Privacy Policy</p>
          <p className="text-1xl">Terms Of Use</p>
          <p className="text-1xl">FAQ</p>
          <p className="text-1xl">Contact</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl">Download App</h1>
          <p className="text-base text-gray-400">Save $3 with App New User Only</p>
          <Image
            src={"/images/Download.png"}
            alt="Download Image"
            width={200}
            height={100}
          />
        </div>
      </div>
      <div className="text-center text-gray-500">Developed by Abdu Subhan | All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
