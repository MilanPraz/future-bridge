import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/for-institutions/Hero";
import HowItWorks from "@/components/for-institutions/HowItWorks";
import Recruitment from "@/components/for-institutions/Recruitment";
import WhyUS from "@/components/for-institutions/WhyUS";
import GlobalPresence from "@/components/for-partners/GlobalPresence";
import OurPartners from "@/components/for-partners/OurPartners";
import PartnerUs from "@/components/for-partners/PartnerUs";
import ClassProvided from "@/components/for-students/ClassProvided";
import SevenStep from "@/components/for-students/SevenStep";
import Support from "@/components/for-students/Support";
import React from "react";

export default function page() {
  return (
    <div className=" pb-40  space-y-20">
      <Hero />
      <WhyUS />
      <HowItWorks />
      <Recruitment />

      <FAQ />
    </div>
  );
}
