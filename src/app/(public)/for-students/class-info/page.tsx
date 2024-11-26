import FAQ from "@/components/Home/FAQ";
import AboutTofel from "@/components/for-students/class-info/AboutTofel";
import Hero from "@/components/for-students/class-info/Hero";
import InterestedToClass from "@/components/for-students/class-info/InterestedToClass";
import ScoreScale from "@/components/for-students/class-info/ScoreScale";
import TestFormat from "@/components/for-students/class-info/TestFormat";
import WhyStudyHere from "@/components/for-students/class-info/WhyStudyHere";
import React from "react";

export default function page() {
  return (
    <div className="pb-40  space-y-20">
      <Hero />
      <WhyStudyHere />
      <AboutTofel />
      <InterestedToClass />
      <TestFormat />
      <ScoreScale />
      <FAQ />
    </div>
  );
}
