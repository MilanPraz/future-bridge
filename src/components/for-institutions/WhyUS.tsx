import React from "react";
import { H2, H3 } from "../typography";
import FadeUp from "../animation/FadeUp";
import FadeUpNormal from "../animation/FadeUpNormal";

export default function WhyUS() {
  return (
    <div className=" 2xl:container px-4 space-y-20">
      <div className=" space-y-4">
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">Why Us?</H2>
        </FadeUp>
      </div>
      <div className=" max-w-4xl  mx-auto flex flex-wrap items-center justify-center gap-10">
        <FadeUpNormal delay={0.2}>
          <div className=" w-[250px] h-[200px] flex flex-col gap-2 items-center justify-between">
            <img src="/for-institutions/badge.svg" width={90} />
            <div className=" text-center space-y-1">
              <H3> Good Services</H3>
              <p className=" text-muted-foreground text-center text-sm">
                Access a network of 3500+ active recruitment partners across 11
                nationalities
              </p>
            </div>
          </div>
        </FadeUpNormal>{" "}
        <FadeUpNormal delay={0.4}>
          <div className=" w-[250px] h-[200px] flex flex-col  gap-2 items-center justify-between">
            <img src="/for-institutions/network.svg" width={90} />
            <div className="  text-center space-y-1">
              <H3> Good Services</H3>
              <p className=" text-muted-foreground text-center text-sm">
                Access a network of 3500+ active recruitment partners across 11
                nationalities
              </p>
            </div>
          </div>
        </FadeUpNormal>{" "}
        <FadeUpNormal delay={0.6}>
          <div className=" w-[250px] h-[200px] flex flex-col  gap-2 items-center justify-between">
            <img src="/for-institutions/hugeNetwork.svg" width={100} />
            <div className=" text-center space-y-1">
              <H3> Good Services</H3>
              <p className=" text-muted-foreground text-center text-sm">
                Access a network of 3500+ active recruitment partners across 11
                nationalities
              </p>
            </div>
          </div>
        </FadeUpNormal>
      </div>
    </div>
  );
}
