import FadeUp from "@/components/animation/FadeUp";
import FadeUpNormal from "@/components/animation/FadeUpNormal";
import { H2, H3 } from "@/components/typography";
import { Calendar, File, NotebookPenIcon, UserCheck } from "lucide-react";
import React from "react";

export default function AboutTofel() {
  return (
    <div className=" 2xl:container px-4">
      <div>
        <FadeUp height={10}>
          <h3 className="text-3xl text-center text-primary font-bold">
            {" "}
            About the TOFEL Classes
          </h3>
        </FadeUp>
      </div>
      <div className=" mt-20 space-y-8">
        <div className="  flex sm:flex-row  flex-col  gap-4  sm:gap-8">
          <div className="   sm:px-4  w-40">
            <FadeUpNormal delay={0.2}>
              <H3 className=" ">Introduction</H3>
            </FadeUpNormal>
          </div>
          <FadeUpNormal delay={0.4}>
            <p className=" text-sm sm:text-sm text-muted-foreground">
              TOEFL (Test of English as a Foreign Language) classes is a
              standardized test to measure the English language ability of
              non-native speakers d esiring to enroll in English-speaking
              universities. It assesses your ability to both speak and
              understand English by analyzing your English ability in terms of
              reading, speaking, listening and writing. The test is accepted by
              many English-speaking academic and professional institutions all
              over the world. Students who are planning to study in a university
              abroad as well as those students who wish to apply for scholarship
              often take this test.
            </p>
          </FadeUpNormal>
        </div>
        <div className=" flex sm:flex-row flex-col gap-4 sm:gap-8">
          <div className=" sm:px-5 w-40 whitespace-nowrap">
            <FadeUpNormal delay={0.2}>
              <H3 className=" ">Score Scale</H3>
            </FadeUpNormal>
          </div>
          <FadeUpNormal delay={0.4}>
            <p className=" text-sm sm:text-sm text-muted-foreground">
              The TOEFL iBT test is scored on a scale of 0 to 120 points. Each
              of the four sections (Reading, Listening, Speaking, and Writing)
              receives a scaled score from 0 to 30. The scaled scores from the
              four sections are added together to determine the total score.
            </p>
          </FadeUpNormal>
        </div>
      </div>
    </div>
  );
}
