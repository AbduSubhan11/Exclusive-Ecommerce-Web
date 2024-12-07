import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
function page() {
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
              Contact
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* LEFT */}
        <div className="shadow p-5">
          {/* UPPER */}
          <div className="py-5 border-b-2 space-y-5">
            <div className="flex items-center gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="font-semibold">Call To Us</h1>
            </div>
            <h1>We are available 24/7, 7 days a week</h1>
            <h1>Phone: +8801611112222</h1>
          </div>
          {/* LOWER */}
          <div className="py-5 space-y-5">
            <div className="flex items-center gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="font-semibold">Write To Us</h1>
            </div>
            <h1>Fill out our form and we will contact you within 24 hours.</h1>
            <h1>Emails: customer@exclusive.com</h1>
            <h1>Emails: support@exclusive.com</h1>
          </div>
        </div>

        {/* RIGHT */}
        <form className="p-5 shadow md:w-[70%] space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <input type="text" placeholder="Your Name" className="bg-[#f5f5f5] pl-2 h-10 outline-none" />
            <input type="email" placeholder="Your Email" className="bg-[#f5f5f5] pl-2 h-10 outline-none" />
            <input type="phone" placeholder="Your Phone" className="bg-[#f5f5f5] pl-2 h-10 outline-none" />
          </div>
          <div>
            <textarea placeholder="Your Message" className="bg-[#f5f5f5] h-52 p-2 outline-none w-full"></textarea>
          </div>
          <div className="flex justify-end">
            <Button
              variant={"outline"}
              className="bg-[#db4444] text-white px-4 py-2"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default page;
