import React from "react";
import { H1, H2, H3 } from "../typography";
import { Button } from "../ui/button";
import FadeUpNormal from "../animation/FadeUpNormal";

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
          <h1 className=" text-lg md:text-4xl  xl:text-5xl font-bold">
            Your Success is Our Mission
          </h1>
        </FadeUpNormal>
        <FadeUpNormal delay={0.3}>
          <p className=" text-xs md:text-lg font-medium">
            Join forces with us to ensure the continued success and growth of
            your business. Together, we'll unlock new opportunities, drive
            innovation, and achieve remarkable results that propel your business
            towards a prosperous future
          </p>
        </FadeUpNormal>
        <FadeUpNormal delay={0.5}>
          <Button className=" bg-secondary hover:bg-secondary">
            Become a Partner
          </Button>
        </FadeUpNormal>
      </div>
    </div>
  );
}
