import Image from "next/image";
import React from "react";
import { H2 } from "../typography";
import FadeUp from "../animation/FadeUp";

export default function Globe() {
  return (
    <div className=" 2xl:container py-20 space-y-8">
      <FadeUp>
        <H2 className=" text-primary text-center pb-10">
          University Around The World
        </H2>
      </FadeUp>

      <div className="  w-fit mx-auto relative">
        <img
          src="/home/uni1.png"
          alt="uni"
          width={200}
          height={100}
          className=" absolute w-32 sm:w-60 top-3 sm:-left-10"
        />
        <img
          src="/home/uni2.png"
          alt="uni"
          width={200}
          height={100}
          className=" absolute top-10 -right-10 w-32 sm:w-60"
        />
        <img
          src="/home/uni3.png"
          alt="uni"
          width={200}
          height={100}
          className=" absolute bottom-20 sm:bottom-40 -left-10 w-32 sm:w-60"
        />
        <img
          src="/home/uni4.png"
          alt="uni"
          width={200}
          height={100}
          className=" absolute bottom-10 sm:bottom-20 -right-10 w-32 sm:w-60"
        />
        <img
          width={400}
          height={400}
          src={"/home/globe.svg"}
          alt="globe"
          className=" w-[250px] sm:w-[500px]"
        />
      </div>
    </div>
  );
}
