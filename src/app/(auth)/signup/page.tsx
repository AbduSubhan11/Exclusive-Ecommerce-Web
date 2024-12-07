import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="py-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-0  gap-20">
        <div className="md:w-[75%]">
          <Image
            src={"/images/login image.png"}
            alt="Signin Image"
            width={700}
            height={100}
            className="h-auto"
          />
        </div>
        <div className="flex w-full lg:w-[50%] xl:w-[35%] 2xl:w-[30%] flex-col justify-center items-center space-y-10">
          <div className="sm:w-80 space-y-10">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Create an account</h1>
              <p className="text-base">Enter your details below</p>
            </div>
            <form className="flex flex-col justify-center space-y-5 ">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 w-full outline-none"
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="border-b-2 w-full outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-b-2 w-full outline-none"
              />
              <div className="space-y-5">
                <Button
                  variant={"outline"}
                  className="bg-[#db4444] text-white px-4 py-2 w-full"
                >
                  Create Account
                </Button>
                <div className="border py-3">
                  <h1 className="text-center">Sign up with Google</h1>
                </div>
              </div>
              <div className="text-center">
                Already have account?{" "}
                <Link href={""} className="underline">
                  Log in
                </Link>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
