"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { P } from "@/components/typography";
import Link from "next/link";
import Partners from "@/components/lottie/register/partner1.json";
import Uni from "@/components/lottie/register/university1.json";
import Books from "@/components/lottie/signup/books.json";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";

const StudentCapComponent = dynamic(
  () => import("@/components/signin/StudentCap"),
  {
    ssr: false,
  }
);

export default function Page() {
  const [isUniHovered, setIsUniHovered] = useState(false);
  const [isPartnerHovered, setIsPartnerHovered] = useState(false);
  return (
    <section className=" min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="text-center lg:text-white md:text-white text-4xl font-bold mt-20">
        <img
          src="/signin/bg.svg"
          alt="cover"
          className="  absolute  top-0  sm:top-0 md:top-0 lg:-top-6 xl:-top-20 w-full"
        />
        <p className=" text-xl top-[50px]  md:text-3xl absolute z-20 md:top-[100px]  lg:top-[180px] left-[40%] lg:left-[45%] text-white">
          Sign Up As
        </p>
      </div>
      <div className="container text-center mt-2 sm:mt-44 relative">
        <div className="absolute top-[-180px] -right-20 transform translate-x-full animate-moveOutInHalf">
          <Image
            src={"/footer/cap.png"}
            alt="gradcap"
            width={150}
            height={100}
          />
        </div>

        <div className="justify-center flex flex-wrap gap-10 mx-auto mt-20 md:mt-0 sm:mt-0 lg:mt-0">
          <Link href="/signup/for-students">
            <Card className="flex flex-col group justify-between items-center p-4 h-[180px] w-[160px] text-primary hover:text-secondary hover:bg-white transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out">
              <div className="flex items-center ">
                <StudentCapComponent />
              </div>
              <div className="text-lg font-semibold mt-1 text-black">
                As Student
              </div>
            </Card>
          </Link>
          <Link href="/signup/for-partner">
            <Card
              className="flex flex-col justify-between items-center p-4 h-[180px] w-[160px] text-primary hover:text-secondary transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out"
              onMouseEnter={() => setIsPartnerHovered(true)}
              onMouseLeave={() => setIsPartnerHovered(false)}
            >
              <div className="flex flex-col items-center">
                <Lottie
                  animationData={Partners}
                  className="mt-6"
                  loop={isPartnerHovered}
                  autoplay={isPartnerHovered}
                />
              </div>
              <div className="text-lg font-semibold mt-4 text-black">
                As Partner
              </div>
            </Card>
          </Link>
          <Card
            className="flex flex-col justify-between items-center p-4 h-[180px] w-[160px] text-primary hover:text-secondary transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setIsUniHovered(true)}
            onMouseLeave={() => setIsUniHovered(false)}
          >
            <div className="flex flex-col items-center">
              <Lottie
                animationData={Uni}
                className=" mt-4"
                loop={isUniHovered}
                autoplay={isUniHovered}
              />
            </div>
            <div className="text-lg font-semibold mt-6 text-black">
              As University
            </div>
          </Card>
        </div>
        <div className="text-center mt-20">
          <P className="text-xl font-semibold tracking-wide">
            Already have an Account?{" "}
            <a href="/signin" className="text-primary">
              Log In!!!
            </a>
          </P>
        </div>
        <div className="absolute bottom-[-50px] lg:block hidden">
          <Lottie animationData={Books} className="w-[250px]" />
        </div>
      </div>
    </section>
  );
}
