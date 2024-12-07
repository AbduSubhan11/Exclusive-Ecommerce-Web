import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function notfound() {
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
              404 Error
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-10 flex flex-col justify-center">
        <h1 className="font-bold text-2xl sm:text-7xl text-center">404 Not Found</h1>
        <p className="text-base text-center">
          Your visited page not found. You may go home page.
        </p>
        <div className="flex justify-center">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              className="bg-[#db4444] text-white px-4 py-2"
            >
              Back to home page
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default notfound;
