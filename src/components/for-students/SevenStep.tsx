"use client";
import React, { useRef, useState } from "react";
import { H2 } from "../typography";
import Image from "next/image";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import FadeUp from "../animation/FadeUp";

export default function SevenStep() {
  const containerRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const { scrollY, scrollYProgress } = useScroll({ target: containerRef });
  console.log(scrollY);
  console.log("prorgres", scrollYProgress);

  const circle1 = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const circle2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const circle3 = useTransform(scrollYProgress, [0.26, 0.35], [0, 1]);
  const circle4 = useTransform(scrollYProgress, [0.35, 0.44], [0, 1]);
  const circle5 = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const circle6 = useTransform(scrollYProgress, [0.6, 0.77], [0, 1]);
  const circle7 = useTransform(scrollYProgress, [0.79, 0.9], [0, 1]);
  console.log("circelee", circle1);

  useMotionValueEvent(scrollY, "change", () => {
    setScroll(scrollYProgress.get());
  });

  console.log("scroll hai", scroll);
  return (
    <div ref={containerRef} className="2xl:container px-4 space-y-20 pt-40">
      <div>
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">
            7 Steps to Your Dream University
          </H2>
        </FadeUp>
      </div>
      <div className="relative z-40 grid gap-0 grid-cols-7 gap-x-6 px-2 gap-y-20 pt-20 place-items-center max-w-2xl mx-auto ">
        {/* FLYING CAP */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            opacity: scroll > 0.05 ? 1 : 0,

            y:
              scroll > 0.05 && scroll! < 0.2
                ? 0
                : scroll > 0.2 && scroll! < 0.3
                ? 170
                : scroll > 0.3 && scroll! < 0.4
                ? 338
                : scroll > 0.4 && scroll! < 0.55
                ? 505
                : scroll > 0.55 && scroll! < 0.77
                ? 670
                : scroll > 0.77 && scroll! < 0.9
                ? 840
                : scroll > 0.9 && scroll! < 1
                ? 1010
                : 1010,
          }}
          className="absolute sm:block hidden  top-[62px] left-[50%] -translate-x-[50%] transform  "
        >
          <Image src={"/footer/cap.png"} alt="gradcap" width={50} height={50} />
        </motion.div>
        {/* 1ST ROW */}
        <div className=" hidden  sm:block sm:col-span-3"></div>
        <motion.div
          style={{
            opacity: circle1,
            scale: circle1,
          }}
          className="relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          1
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 0.1 ? 0 : 50,
            opacity: scroll >= 0.1 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className=" col-span-6 sm:col-span-3  text-start flex flex-col w-full "
        >
          <h2 className=" text-lg font-semibold ">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
        {/* 2nd ROW */}
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 0.2 ? 0 : -50,
            opacity: scroll >= 0.2 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className=" col-span-6 sm:col-span-3 text-end "
        >
          <h2 className=" text-lg font-semibold">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: circle2,
            scale: circle2,
          }}
          className="relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          2
        </motion.div>
        <div className=" hidden  sm:block sm:col-span-3"></div>
        {/* 3rd ROW */}
        <div className=" hidden  sm:block sm:col-span-3"></div>{" "}
        <motion.div
          style={{
            opacity: circle3,
            scale: circle3,
          }}
          className="relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          3
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 0.32 ? 0 : 50,
            opacity: scroll >= 0.32 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className=" col-span-6 sm:col-span-3  text-start flex flex-col w-full "
        >
          <h2 className=" text-lg font-semibold ">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
        {/* 4th ROW */}
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 0.45 ? 0 : -50,
            opacity: scroll >= 0.45 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className="  col-span-6 sm:col-span-3 text-end "
        >
          <h2 className=" text-lg font-semibold">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: circle4,
            scale: circle4,
          }}
          className="relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          4
        </motion.div>
        <div className=" hidden  sm:block sm:col-span-3"></div>
        {/* 5th ROW */}
        <div className=" hidden  sm:block sm:col-span-3"></div>{" "}
        <motion.div
          style={{
            opacity: circle5,
            scale: circle5,
          }}
          className=" relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          5
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 0.6 ? 0 : 50,
            opacity: scroll >= 0.6 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className="col-span-6 sm:col-span-3  text-start flex flex-col w-full"
        >
          <h2 className=" text-lg font-semibold ">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
        {/* 6th ROW */}
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 0.83 ? 0 : -50,
            opacity: scroll >= 0.83 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className=" col-span-6 sm:col-span-3 text-end "
        >
          <h2 className=" text-lg font-semibold">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: circle6,
            scale: circle6,
          }}
          className="relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          6
        </motion.div>
        <div className=" hidden  sm:block sm:col-span-3"></div>
        {/* 7th ROW */}
        <div className=" hidden  sm:block sm:col-span-3"></div>{" "}
        <motion.div
          style={{
            opacity: circle7,
            scale: circle7,
          }}
          className="relative -z-10 bg-primary self-start transition-all duration-300  h-14 w-14 text-2xl flex items-center justify-center text-center text-white rounded-full
        "
        >
          7
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: scroll >= 1 ? 0 : 50,
            opacity: scroll >= 1 ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className="col-span-6 sm:col-span-3  text-start flex flex-col w-full"
        >
          <h2 className=" text-lg font-semibold ">Counselling</h2>
          <p className=" text-sm text-muted-foreground">
            Receive personalized guidance from our expert counselors to identify
            your strengths and potential career paths.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
