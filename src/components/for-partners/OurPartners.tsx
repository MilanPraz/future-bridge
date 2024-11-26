import React from "react";
import { H2 } from "../typography";
import { Quote } from "lucide-react";
import FadeUp from "../animation/FadeUp";
import FadeUpNormal from "../animation/FadeUpNormal";

export default function OurPartners() {
  return (
    <div className=" 2xl:container px-4 space-y-20">
      <div className=" space-y-4">
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">
            Our Partners Love Us
          </H2>
        </FadeUp>
      </div>
      <div className=" flex gap-4 md:gap-8 flex-wrap justify-center items-center  mx-auto max-w-4xl">
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <FadeUpNormal delay={idx * 0.3}>
              <div
                key={idx}
                className=" hover:drop-shadow-xl hover:shadow-2xl hover:scale-105 transition-all  rounded-md border max-w-[200px] "
              >
                <div className=" p-4">
                  <div className=" flex justify-end">
                    <Quote
                      fill="#43056c"
                      strokeWidth={0}
                      className=" self-end text-primary"
                    />
                  </div>
                  <p className=" text-muted-foreground text-sm tracking-wide">
                    "Working with Future Bridge has streamlined our processes
                    and boosted efficiency. Excellent support and innovative
                    solutions!"
                  </p>
                </div>
                <div className=" relative">
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 590"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150 rounded-b-lg"
                  >
                    <path
                      d="M 0,600 L 0,225 C 112.92857142857142,197.57142857142856 225.85714285714283,170.14285714285714 358,178 C 490.14285714285717,185.85714285714286 641.5,229 746,267 C 850.5,305 908.1428571428571,337.8571428571429 1016,330 C 1123.857142857143,322.1428571428571 1281.9285714285716,273.57142857142856 1440,225 L 1440,600 L 0,600 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#43056c"
                      fill-opacity="1"
                      className="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                  </svg>
                  <img
                    src="/people/person.jpg"
                    alt="human"
                    className="border border-primary  absolute top-0 left-[50%] -translate-x-[50%] w-16 h-16 object-cover  rounded-full"
                  />
                </div>
              </div>
            </FadeUpNormal>
          );
        })}
      </div>
    </div>
  );
}
