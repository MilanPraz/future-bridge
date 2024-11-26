"use client";
import React, { useRef, useState } from "react";
import { H2 } from "../typography";
import {
  BriefcaseBusiness,
  CircleUser,
  Globe,
  Headset,
  Network,
  PlaneTakeoff,
  User,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Questions from "@/components/lottie/questionAnimate.json";
import dynamic from "next/dynamic";
import Lottie from "lottie-react";
import FadeUp from "../animation/FadeUp";
// const Lottie = dynamic(() => import("lottie-react"));

// import Questions from "/home/questionAnimate.json";

export default function WhyChooseUs() {
  const ref = useRef(null);
  // const [hovered,sethovered]=useState(false)
  const isInView = useInView(ref);
  // {once:true}
  return (
    <div className=" 2xl:container py-20 space-y-4">
      <FadeUp>
        <H2 className=" text-primary text-center pb-8">Why Choose Us?</H2>
      </FadeUp>

      <div
        ref={ref}
        className=" grid grid-cols-1 lg:grid-cols-5 gap-10 place-items-center px-4
      "
      >
        {/* START */}
        <motion.div
          initial={{
            x: 300,
            y: 300,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : 300,
            y: isInView ? 0 : 300,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className=" col-span-2 max-w-sm     ml-auto  space-y-4"
        >
          <div className=" flex items-center justify-center gap-4">
            <BriefcaseBusiness size={30} className=" text-primary" />
            <h3 className=" font-bold text-lg sm:text-xl text-primary">
              Supporting Student Success
            </h3>
          </div>
          <p className=" text-xs sm:text-sm text-center text-muted-foreground">
            Dedicated to providing financial support, ensuring students have the
            resources needed to pursue their dreams of studying abroad and
            achieve academic success in a new country.
          </p>
        </motion.div>
        {/* EMPTY DIV TO COVERUP EMPTY SPACE */}
        <div></div>
        <motion.div
          initial={{
            x: -200,
            y: 300,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : -200,
            y: isInView ? 0 : 300,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="   mr-auto max-w-sm   col-span-2    space-y-4  "
        >
          <div className=" flex items-center justify-center gap-4">
            <Globe size={30} className=" text-primary" />
            <h3 className=" font-bold text-lg sm:text-xl text-primary">
              Mission Statement
            </h3>
          </div>
          <p className=" text-xs sm:text-sm text-center text-muted-foreground">
            Dedicated to empowering students worldwide to realize their
            educational aspirations through personalized guidance and unwavering
            support.
          </p>
        </motion.div>
        {/* MID */}
        <motion.div
          initial={{
            x: 300,

            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : 300,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className=" col-span-2 max-w-sm  ml-auto lg:ml-0 space-y-4"
        >
          <div className=" flex items-center justify-center gap-4">
            <Headset size={30} className=" text-primary" />
            <h3 className=" font-bold text-lg sm:text-xl text-primary">
              Continuous Support
            </h3>
          </div>
          <p className=" text-xs sm:text-sm text-center text-muted-foreground">
            Providing ongoing assistance throughout the academic journey,
            ensuring a smooth transition to the chosen study destination.
          </p>
        </motion.div>
        <div className=" self-center lg:block hidden">
          <Lottie animationData={Questions} autoplay={true} loop={true} />
        </div>
        {/* <img
          className=" lg:block hidden"
          src="/home/main.png"
          alt="main"
          height={250}
          width={250}
        /> */}
        <motion.div
          initial={{
            x: -300,

            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : -300,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className=" col-span-2 max-w-sm  space-y-4 mr-auto lg:mr-0"
        >
          <div className=" flex items-center justify-center gap-4">
            <Network size={30} className=" text-primary" />
            <h3 className=" font-bold text-lg sm:text-xl text-primary">
              Global Network
            </h3>
          </div>
          <p className=" text-xs sm:text-sm text-center text-muted-foreground">
            Offering diverse study destinations and academic opportunities
            worldwide, enriching educational experiences for students globally.
          </p>
        </motion.div>
        {/* EnD */}
        <motion.div
          initial={{
            x: 300,
            y: -100,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : 300,
            y: isInView ? 0 : -100,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className=" col-span-2 max-w-sm  ml-auto  space-y-4"
        >
          <div className=" flex items-center justify-center gap-4">
            <PlaneTakeoff size={30} className=" text-primary" />
            <h3 className=" font-bold text-lg sm:text-xl text-primary">
              Empowering Dreams
            </h3>
          </div>
          <p className=" text-xs sm:text-sm text-center text-muted-foreground">
            Dedicated to helping students achieve their dreams of studying
            abroad with comprehensive IELTS, PTE, and other language courses.
            Prepare confidently for academic and life success in a new country.
          </p>
        </motion.div>
        {/* EMPTY DIV TO COVERUP EMPTY SPACE */}
        <div></div>
        <motion.div
          initial={{
            x: -300,
            y: -100,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : -300,
            y: isInView ? 0 : -100,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className=" col-span-2 max-w-sm mr-auto space-y-4 "
        >
          <div className=" flex items-center justify-center gap-4">
            {/* <User  /> */}
            <CircleUser size={30} className=" text-primary" />
            <h3 className=" font-bold text-lg sm:text-xl text-primary">
              Personalized Guidance
            </h3>
          </div>
          <p className=" text-xs sm:text-sm text-center text-muted-foreground">
            Our experienced consultants provide individualized support, helping
            students navigate the complexities of the education system and make
            informed decisions about their academic journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
