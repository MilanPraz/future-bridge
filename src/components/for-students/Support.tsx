"use client";
import React, { useState } from "react";
import { H2, H3 } from "../typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { counsellingAccordion, faqs } from "../Home/data";
import { cn } from "@/lib/utils";
import { HoverMe } from "../animation/HoverMe";
import FadeUp from "../animation/FadeUp";
import FadeUpNormal from "../animation/FadeUpNormal";
import SlideFromLeft from "../animation/SlideFromLeft";
import SlideFromRight from "../animation/SlideFromRight";

export default function Support() {
  const [selectedAccordion, setSelectedAccordion] = useState(0);
  console.log("accordion", selectedAccordion);
  console.log("accordion type", typeof selectedAccordion);
  return (
    <div className=" 2xl:container px-4 space-y-20">
      <div>
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">
            How We Support You?
          </H2>
        </FadeUp>
      </div>
      <div
        className=" grid grid-cols-1 lg:grid-cols-2 place-items-center
       gap-2"
      >
        <SlideFromLeft>
          <div className="  relative">
            <div className=" h-[400px] w-[400px] ">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#C4C4C4" transform="translate(100 100)">
                  <animate
                    attributeName="d"
                    dur={"9000ms"}
                    repeatCount="indefinite"
                    values="
                  M52.1,-58.5C66.2,-50.3,75.3,-32.6,75.9,-15.4C76.6,1.8,68.6,18.4,60,35.9C51.4,53.5,42.1,71.9,27.6,78.3C13,84.8,-6.9,79.3,-21.9,69.7C-36.8,60.1,-46.7,46.4,-52.1,32.3C-57.6,18.3,-58.6,3.9,-58.4,-12.5C-58.1,-28.9,-56.6,-47.3,-46.7,-56.3C-36.8,-65.3,-18.4,-64.9,0.3,-65.3C19,-65.6,38,-66.8,52.1,-58.5Z;
                  M31,-41C40.3,-29.2,48,-19.5,55.8,-5.4C63.5,8.6,71.2,27.1,66.1,40.3C61,53.5,43.1,61.4,25.6,65.8C8.1,70.2,-9.1,71.1,-25.9,66.8C-42.6,62.6,-59,53,-65.2,39.2C-71.4,25.3,-67.4,7.1,-61.1,-7.7C-54.9,-22.5,-46.4,-33.9,-35.9,-45.4C-25.3,-57,-12.6,-68.7,-0.9,-67.7C10.9,-66.6,21.8,-52.8,31,-41Z;
                  M40,-51.3C52.7,-37.1,64.2,-25.2,70.7,-9.4C77.2,6.5,78.7,26.4,71.1,42.6C63.6,58.7,47,71.2,29.7,74.4C12.4,77.5,-5.6,71.3,-19.1,62.2C-32.6,53.1,-41.4,41.1,-47.1,28.5C-52.7,16,-55.1,2.9,-57,-14.1C-58.8,-31.1,-60,-52,-50.4,-66.7C-40.8,-81.4,-20.4,-89.8,-3.4,-85.8C13.7,-81.8,27.4,-65.4,40,-51.3Z;
                  M41.6,-51.7C51.7,-41.2,55.9,-25.9,62.3,-8.3C68.6,9.4,77.1,29.4,72.5,46.1C67.9,62.8,50.3,76.2,32,79.1C13.7,82,-5.3,74.3,-19.9,64.7C-34.6,55,-44.9,43.5,-55.1,29.9C-65.2,16.3,-75.1,0.6,-72.1,-12.1C-69.1,-24.8,-53.2,-34.6,-39,-44.4C-24.9,-54.1,-12.4,-63.8,1.7,-65.8C15.8,-67.8,31.6,-62.1,41.6,-51.7Z;
                  M44.5,-53.8C56,-43.3,62.8,-27.8,67.4,-10.6C72,6.7,74.5,25.6,67.9,41.2C61.3,56.9,45.5,69.2,27.1,77.1C8.7,84.9,-12.3,88.1,-26.6,79.9C-40.8,71.7,-48.4,52,-51.8,35.2C-55.2,18.4,-54.4,4.5,-53.8,-11.2C-53.1,-26.9,-52.5,-44.4,-43.6,-55.4C-34.6,-66.3,-17.3,-70.7,-0.4,-70.2C16.4,-69.7,32.9,-64.2,44.5,-53.8Z;
                  M36.2,-49.3C46.1,-34.8,52.7,-22.6,59.2,-7.3C65.6,8.1,71.9,26.6,65.4,37.6C58.8,48.6,39.5,52.1,21.3,59C3,65.9,-14.2,76.2,-29.2,73.6C-44.3,71.1,-57,55.7,-66.3,38.7C-75.5,21.8,-81.1,3.2,-80.2,-16.2C-79.2,-35.7,-71.6,-56,-57.2,-69.7C-42.7,-83.3,-21.4,-90.3,-4.1,-85.4C13.1,-80.5,26.3,-63.7,36.2,-49.3Z;
                  M52.1,-58.5C66.2,-50.3,75.3,-32.6,75.9,-15.4C76.6,1.8,68.6,18.4,60,35.9C51.4,53.5,42.1,71.9,27.6,78.3C13,84.8,-6.9,79.3,-21.9,69.7C-36.8,60.1,-46.7,46.4,-52.1,32.3C-57.6,18.3,-58.6,3.9,-58.4,-12.5C-58.1,-28.9,-56.6,-47.3,-46.7,-56.3C-36.8,-65.3,-18.4,-64.9,0.3,-65.3C19,-65.6,38,-66.8,52.1,-58.5Z;

                
                
                "
                  />
                </path>
              </svg>
            </div>
            <div className=" absolute top-0  ">
              <HoverMe>
                <img
                  src="/for-students/childrens.png"
                  alt=""
                  height={400}
                  width={400}
                  className="  z-20"
                />
              </HoverMe>
            </div>
          </div>
        </SlideFromLeft>
        <SlideFromRight>
          <div>
            <Accordion
              defaultValue="0"
              onValueChange={(val: any) => setSelectedAccordion(val)}
              type="single"
              collapsible
              className="  w-full sm:w-[550px]  md:w-[700px] mx-auto   lg:w-[550px]  xl:w-[700px] "
            >
              {counsellingAccordion.map((f, idx) => {
                return (
                  <div
                    key={idx}
                    className=" flex  items-center   w-full  space-y-2"
                  >
                    <div className="   self-start translate-y-5">
                      {/* STAR IMAGE */}
                      <img
                        className="self-center"
                        src="/for-students/star.png"
                        alt="star"
                        width={40}
                      />{" "}
                    </div>
                    <AccordionItem
                      className="w-[90%]   border-none px-4"
                      key={idx}
                      value={`${idx}`}
                    >
                      <AccordionTrigger
                        className={cn(
                          "hover:text-primary  text-start justify-between  flex  gap-4    items-center text-sm md:text-base"
                        )}
                      >
                        <h3 className=" text-base md:text-2xl  text-start  font-semibold">
                          {f.q}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="relative space-y-4 overflow-hidden">
                        {/* GREEN LINE ANIMATION */}
                        <div
                          className={`absolute w-[2px] ${
                            selectedAccordion == idx ? "h-full " : " h-0"
                          } bg-secondary  transition-all duration-700  delay-150 left-[7px]`}
                        ></div>
                        {f.answers.map((a, idx) => {
                          return (
                            <div className=" flex items-center gap-2" key={idx}>
                              {/* GREENDOT */}
                              <div className={` relative `}>
                                {idx === 0 && (
                                  <div className=" h-20 w-8 absolute -top-20 right-0 bg-[#F7FFEF]"></div>
                                )}
                                {idx === f.answers.length - 1 && (
                                  <div className=" h-20 w-8 absolute -bottom-20 right-0 bg-[#F7FFEF]"></div>
                                )}
                                <div className=" flex-shrink-0 h-4 w-4 self-center rounded-full bg-secondary"></div>
                              </div>
                              <div>
                                <h2 className=" text-sm sm:text-base font-semibold">
                                  {a.title}
                                </h2>
                                <p className=" text-muted-foreground  text-xs sm:text-sm ">
                                  {a.a}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </SlideFromRight>
      </div>
    </div>
  );
}
