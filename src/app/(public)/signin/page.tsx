"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Lottie from "lottie-react";
import { P } from "@/components/typography";
import Uni from "@/components/lottie/register/university1.json";
import RealState from "@/components/lottie/register/realestate1.json";
import Admin from "@/components/lottie/register/admin1.json";
import Books from "@/components/lottie/signup/books.json";
import dynamic from "next/dynamic";

const StudentCapComponent = dynamic(
  () => import("@/components/signin/StudentCap"),
  {
    ssr: false,
  }
);

export default function Page() {
  const [isUniHovered, setIsUniHovered] = useState(false);
  const [isRealStateHovered, setIsRealStateHovered] = useState(false);
  const [isAdminHovered, setIsAdminHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="text-center lg:text-white md:text-white text-4xl font-bold mt-20">
        <img
          src="/signin/bg.svg"
          alt="cover"
          className="absolute top-0 sm:top-0 md:top-0 lg:-top-6 xl:-top-20 w-full"
        />
        <p className="text-2xl top-10  md:text-3xl absolute z-20 md:top-[100px]  lg:top-[150px] left-[50%] -translate-x-[50%] text-white">
          Login As
        </p>
      </div>
      <div className="container text-center mt-44 sm:mt-44 relative">
        <div className="absolute top-[-200px] -right-20 transform translate-x-full animate-moveOutInHalf">
          <Image
            src={"/footer/cap.png"}
            alt="gradcap"
            width={150}
            height={100}
          />
        </div>

        <div className="justify-center flex flex-wrap gap-10 mx-auto lg:mt-[100px] mt-0">
          <Card className="flex flex-col group items-center p-4 w-[160px] h-[180px]  text-primary hover:text-secondary hover:bg-white transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out">
            <div className="flex items-center">
              <StudentCapComponent />
            </div>
            <div className="text-lg font-semibold mt-1 text-black">
              As Student
            </div>
          </Card>
          <Card
            className="flex flex-col items-center p-4 w-[160px] h-[180px]  text-primary hover:text-secondary transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setIsUniHovered(true)}
            onMouseLeave={() => setIsUniHovered(false)}
          >
            <div className="flex flex-col items-center">
              <Lottie
                animationData={Uni}
                loop={isUniHovered}
                autoplay={isUniHovered}
                className="mt-4"
              />
            </div>
            <div className="text-lg mt-6 font-semibold  text-black">
              As University
            </div>
          </Card>
          <Card
            className="flex flex-col items-center p-4 w-[160px] h-[180px]  text-primary hover:text-secondary transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setIsRealStateHovered(true)}
            onMouseLeave={() => setIsRealStateHovered(false)}
          >
            <div className="flex flex-col items-center">
              <Lottie
                animationData={RealState}
                loop={isRealStateHovered}
                autoplay={isRealStateHovered}
              />
            </div>
            <div className="text-lg font-semibold mt-4 text-black">
              As Real Estate
            </div>
          </Card>
          <Card
            className="relative group flex text-primary hover:text-secondary flex-col items-center p-4 w-[160px] h-[180px]  transform hover:scale-110 motion-reduce:transform-none transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setIsAdminHovered(true)}
            onMouseLeave={() => setIsAdminHovered(false)}
          >
            <div className="flex flex-col items-center">
              <Lottie
                animationData={Admin}
                loop={isAdminHovered}
                autoplay={isAdminHovered}
                className=""
              />
            </div>
            <div className="text-lg font-semibold text-black">As Admin</div>
          </Card>
        </div>
        <div className="text-center mt-20 mb-10 ">
          <P className="text-xl">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Sign UP!!!
            </a>
          </P>
        </div>
        <div className="absolute bottom-[-50px] lg:block hidden ">
          <Lottie animationData={Books} className="w-[250px]" />
        </div>
      </div>
    </section>
  );
}
