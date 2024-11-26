import FAQ from "@/components/Home/FAQ";
import ClassProvided from "@/components/for-students/ClassProvided";
import Hero from "@/components/for-students/Hero";
import SevenStep from "@/components/for-students/SevenStep";
import Support from "@/components/for-students/Support";
import React from "react";

export default function page() {
  return (
    <div className=" pb-40  space-y-10">
      <Hero />
      <Support />
      <SevenStep />
      <ClassProvided />
      <FAQ />
    </div>
  );
}
