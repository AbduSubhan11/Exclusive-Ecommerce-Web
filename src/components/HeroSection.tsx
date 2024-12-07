import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="flex justify-center px-5 md:px-10 lg:px-16 gap-5">
      <aside className="hidden md:block w-[30%] border-r-2 pt-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            Woman&apos;s Fashion{" "}
            <svg
              className="h-6 w-8 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            Men&apos;s Fashion{" "}
            <svg
              className="h-6 w-8 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <div>Electronics</div>
          <div>Home & Lifestyle</div>
          <div>Medicine</div>
          <div>Baby&apos;s & Toys</div>
          <div>Groceries & Pets</div>
          <div>Health & Beauty</div>
        </div>
      </aside>
      <main className="w-full md:w-[90%] pt-7">
        <Image src={"/images/hero section.png"} alt="Hero Image" width={1000} height={1000}/>
      </main>
    </section>
  );
}

export default HeroSection;
