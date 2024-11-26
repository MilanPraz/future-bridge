import FadeUp from "@/components/animation/FadeUp";
import FadeUpNormal from "@/components/animation/FadeUpNormal";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <div
      className="   h-[60vh] md:h-[100vh] relative  -top-32 md:-top-40 lg:-top-40"
      style={{
        background: "url(/for-students/Background.png) no-repeat  center/cover",
      }}
    >
      <div className=" text-white absolute  md:w-[50%] top-[55%] md:top-[44%] lg:top-[45%] xl:top-[46%] space-y-2 md:space-y-3 -translate-y-[50%] left-4 md:left-10">
        <FadeUpNormal delay={0.1}>
          <h1 className=" text-lg md:text-4xl  xl:text-5xl font-bold">TOFEL</h1>
        </FadeUpNormal>
        <FadeUpNormal delay={0.3}>
          <p className=" text-xs md:text-lg font-medium">
            TOEFL (Test of English as a Foreign Language) is a standardized test
            measuring English proficiency for academic and professional purposes
            globally.
          </p>
        </FadeUpNormal>
        <FadeUpNormal height={14} delay={0.5}>
          <Button className=" bg-secondary hover:bg-secondary">
            Enquiry Now
          </Button>
        </FadeUpNormal>
      </div>
    </div>
  );
}
