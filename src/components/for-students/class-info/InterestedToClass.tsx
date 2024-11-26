"use client";
import { H2, H3 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-react";
import { Calendar, File, NotebookPenIcon, UserCheck } from "lucide-react";
import React from "react";
import Questioning from "@/components/lottie/for-students/Questioning.json";
import Talking from "@/components/lottie/for-students/speechBubble.json";
import FadeUp from "@/components/animation/FadeUp";
import SlideFromLeft from "@/components/animation/SlideFromLeft";
import SlideFromRight from "@/components/animation/SlideFromRight";

export default function InterestedToClass() {
  return (
    <div className=" 2xl:container px-4">
      <div>
        <FadeUp height={10}>
          <h3 className="text-3xl text-center text-primary font-bold">
            {" "}
            Interested in TOFEL Preparation Classes?
          </h3>
        </FadeUp>
      </div>
      <div className="  mt-20  grid md:grid-cols-2 gap-8">
        <form className=" space-y-4">
          <SlideFromLeft delay={0.1}>
            <div className=" space-y-2">
              <Label className=" ">Name</Label>
              <Input
                type="text"
                placeholder="Enter Your Name"
                className=" bg-transparent"
              />
            </div>
          </SlideFromLeft>
          <SlideFromLeft delay={0.2}>
            <div className=" space-y-2">
              <Label className=" ">Email</Label>
              <Input
                type="text"
                placeholder="Enter Your Email"
                className=" bg-transparent"
              />
            </div>
          </SlideFromLeft>
          <SlideFromLeft delay={0.3}>
            <div className=" space-y-2">
              <Label className=" ">Address</Label>
              <Input
                type="text"
                placeholder="Enter Your Address"
                className=" bg-transparent"
              />
            </div>
          </SlideFromLeft>
          <SlideFromLeft delay={0.4}>
            <div className=" space-y-2">
              <Label className=" ">Phone Number</Label>
              <Input
                type="text"
                placeholder="Enter Your Phone"
                className=" bg-transparent"
              />
            </div>
          </SlideFromLeft>
          <SlideFromLeft delay={0.5}>
            <div>
              <Button className=" bg-secondary hover:bg-secondary px-8">
                Submit
              </Button>
            </div>
          </SlideFromLeft>
        </form>
        <SlideFromRight delay={0.2}>
          <div className="relative h-auto md:order-1 -order-1">
            <img src="/for-students/teaching.png" />
            <Lottie
              animationData={Questioning}
              autoPlay
              width={20}
              height={20}
              className="  absolute  w-6 sm:w-10 right-[5%]  bottom-[55%] md:bottom-[70%]  lg:bottom-[55%] "
            />
            <Lottie
              animationData={Talking}
              autoPlay
              width={20}
              height={20}
              className="  absolute  w-6 sm:w-10 top-[4%] right-[18%] sm:right-[14%] lg:right-[20%] "
            />
          </div>
        </SlideFromRight>
      </div>
    </div>
  );
}
