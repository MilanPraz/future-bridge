"use client";
import React from "react";
import { H2 } from "../typography";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Questioning from "@/components/lottie/for-students/Questioning.json";
import Talking from "@/components/lottie/for-students/speechBubble.json";
import FadeUp from "../animation/FadeUp";
import SlideFromLeft from "../animation/SlideFromLeft";
import SlideFromRight from "../animation/SlideFromRight";

export default function ClassProvided() {
  return (
    <div className="2xl:container px-4 space-y-20">
      <div>
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">
            Classes We Provided
          </H2>
        </FadeUp>
      </div>
      <div className=" sm:flex-row flex-col  flex gap-8 mx-auto max-w-4xl">
        <SlideFromLeft delay={0.2}>
          <div className=" relative flex items-center justify-center">
            <img
              src="/for-students/teaching.png"
              alt="teaching"
              width={500}
              height={400}
            />
            <Lottie
              animationData={Questioning}
              autoPlay
              width={20}
              height={20}
              className="  absolute  w-6 sm:w-10 right-[10%] sm:right-[5%]  bottom-[55%] md:bottom-[60%]  lg:bottom-[55%] "
            />
            <Lottie
              animationData={Talking}
              autoPlay
              width={20}
              height={20}
              className="  absolute  w-6 sm:w-10 top-[4%] right-[18%] sm:right-[14%] lg:right-[20%] "
            />
          </div>
        </SlideFromLeft>
        <SlideFromRight delay={0.4}>
          <div className=" grid  grid-cols-2 gap-2">
            <div className=" overflow-hidden group relative px-16 py-4 w-full  flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>TOFEL</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all  ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className="group relative px-16 py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>GMAT</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className="group relative px-16 py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>IELTS</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className="group relative px-16 py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>GRE</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className="group relative  whitespace-nowrap px-16 py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>PTE-A</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className="group relative px-16 py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>TOPIK</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500 absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className="group relative px-16 py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>SAT</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
            <div className=" px-16 group relative py-4 w-full flex items-center justify-center  bg-secondary rounded-lg  font-semibold text-white">
              <p>JPLT</p>
              <div
                className={`flex items-center justify-center rounded-lg group-hover:top-0 top-40 transition-all ease-in-out duration-500  absolute inset-0 bg-primary`}
              >
                {" "}
                <p>Read more</p>
              </div>
            </div>
          </div>
        </SlideFromRight>
      </div>
    </div>
  );
}
