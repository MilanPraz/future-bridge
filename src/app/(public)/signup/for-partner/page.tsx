"use client";
import React, { useState } from "react";
import { H3, H4, P } from "@/components/typography";
import Step1 from "@/components/signupPartnerForm/step1";
import Step2 from "@/components/signupPartnerForm/step2";
import Step3 from "@/components/signupPartnerForm/step3";
import Step4 from "@/components/signupPartnerForm/step4";
import { Button } from "@/components/ui/button";
import Steps from "@/components/resgiter/Steps";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const stepNo = searchParams.get("step");
  const isStep2 = stepNo === "2";
  const isStep3 = stepNo === "3";
  const isStep4 = stepNo === "4";
  return (
    <section
      className="min-h-screen  lg:h-[120vh]  flex justify-center  relative z-1  sm:p-4"
      style={{
        background: `url(/signup/bridge.svg) no-repeat bottom/cover`,
      }}
    >
      <div className="flex flex-col p-2 sm:p-4 max-w-4xl w-full ">
        <div>
          <H3 className="text-center lg:text-left">Register as A Partner</H3>
          <P className="mt-2 text-center lg:text-left">
            Unlock new opportunities for growth and collaboration by becoming a
            valued partner.
          </P>
        </div>
        <div className="mt-8">
          <Steps />
        </div>
        <div className="">
          {isStep2 ? (
            <Step2 />
          ) : isStep3 ? (
            <Step3 />
          ) : isStep4 ? (
            <Step4 />
          ) : (
            <Step1 />
          )}
        </div>
      </div>
    </section>
  );
}
