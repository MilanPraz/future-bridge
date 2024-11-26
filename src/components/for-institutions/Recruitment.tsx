import React from "react";
import { H2, H3, H4 } from "../typography";
import FadeUp from "../animation/FadeUp";
import FadeUpNormal from "../animation/FadeUpNormal";

export default function Recruitment() {
  return (
    <div className=" 2xl:container px-4 space-y-20">
      <div className=" space-y-4">
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">
            High-Performance Student Recruitment Solutions
          </H2>
        </FadeUp>
      </div>
      <div className=" max-w-6xl  mx-auto flex flex-wrap items-center justify-center gap-10">
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <FadeUpNormal key={idx} delay={idx * 0.3}>
              <div className=" border rounded-xl p-2 py-4 w-[350px] space-y-2">
                <H4>A Trusted Partner</H4>
                <p className=" text-sm text-muted-foreground">
                  With partnerships spanning over 800+ universities worldwide,
                  we are a trusted brand in higher education. Our global
                  collaborations reflect the trust that top universities place
                  in us.
                </p>
              </div>
            </FadeUpNormal>
          );
        })}
      </div>
    </div>
  );
}
