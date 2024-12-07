import Image from "next/image";
import React from "react";

function NewArrival() {
  return (
    <section className="px-5 md:px-10 lg:px-16 space-y-14">
      <div>
        <div className="flex items-center gap-2">
          <div className="border-l-[15px] rounded-md border-[#db4444] text-[#db4444] w-2 h-7"></div>
          <div className="text-[#db4444]">Featured</div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-16">
          <h1 className="font-semibold text-4xl">New Arrival</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5  justify-center">
        {/* LEFT */}
        <div className="md:w-[50%]  relative bg-black">
          <Image
            src="/images/PlayStation.png"
            alt="PlayStaion"
            width={500}
            height={100}
            className=" object-cover"
          />
          <div className="absolute bottom-0 text-white px-5 py-10 space-y-2">
            <h1 className="font-bold text-xl">PlayStation 5</h1>
            <p className="font-thin">
              Black and White version of the PS5 coming out on sale
            </p>
            <button className="underline">Shop Now</button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="md:w-[50%] flex flex-col gap-5  ">
          {/*RIGHT TOP */}
          <div className="relative">
            <Image
              src={"/images/Women Collection.png"}
              alt="Women Collection"
              width={500}
              height={100}
              className="w-full h-96"
            />
            <div className="absolute bottom-0 text-white px-5 py-10 space-y-2">
              <h1 className="font-bold text-xl">Women Collection</h1>
              <p className="font-thin">
                Featured woman collection that give you another vibe
              </p>
              <button className="underline">Shop Now</button>
            </div>
          </div>
          {/*RIGHT BOTTOM */}
          <div className="sm:flex justify-center gap-5 sm:space-y-0 space-y-5">
            <div className="sm:w-[50%] relative bg-black">
              <div className="flex flex-col items-center">
                <Image
                  src={"/images/Amazon Speaker.png"}
                  alt="Spekaer"
                  width={200}
                  height={100}
                />
              </div>
              <div className="absolute text-white bottom-0 px-5 py-10 space-y-2">
                <h1 className="font-bold text-xl">Speakers</h1>
                <p className="font-thin">Amazon wireless speakers</p>
                <button className="underline">Shop Now</button>
              </div>
            </div>
            <div className="sm:w-[50%] relative bg-black">
              <div className="flex flex-col items-center">
                <Image
                  src={"/images/Perfume.png"}
                  alt="Perfume"
                  width={150}
                  height={100}
                />
              </div>
              <div className="absolute text-white bottom-0 px-5 py-10 space-y-2">
                <h1>Speakers</h1>
                <p>Amazon wireless speakers</p>
                <button className="underline">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default NewArrival;
