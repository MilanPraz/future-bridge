"use client";
import { Building } from "lucide-react";
import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import FadeUpNormal from "../animation/FadeUpNormal";

// useDevice;
export default function UniStats() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 400px)");
  return (
    <div>
      {" "}
      <div className=" flex flex-wrap items-center justify-center my-20 gap-4 sm:gap-10 ">
        {Array.from({ length: 3 }).map((_, idx) => {
          return (
            <FadeUpNormal delay={idx * 0.2} key={idx}>
              <div
                key={idx}
                className="group overflow-hidden   relative before:absolute  border flex items-center gap-2 w-fit  shadow-md rounded-md p-2  sm:p-4 text-black hover:text-white "
              >
                <div className="absolute h-[500px] w-[500px] bg-secondary rounded-full top-[100%] left-[100%] group-hover:top-[-80%] group-hover:left-[-70%] transition-all duration-700 ease-in-out"></div>
                <Building
                  size={isSmallDevice ? 20 : 50}
                  className="flex-shrink-0 relative transition-colors duration-300 group-hover:text-white text-black font-bold text-lg"
                />
                <div className=" relative transition-colors duration-300 group-hover:text-white text-black font-bold  text-sm sm:text-lg">
                  <h4>+100</h4>
                  <h4>University</h4>
                </div>
              </div>
            </FadeUpNormal>
          );
        })}
      </div>
    </div>
  );
}
