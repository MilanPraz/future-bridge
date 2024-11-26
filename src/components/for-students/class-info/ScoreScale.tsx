import FadeUp from "@/components/animation/FadeUp";
import FadeUpNormal from "@/components/animation/FadeUpNormal";
import { BookOpen, Headphones, Mic, NotebookPenIcon } from "lucide-react";
import React from "react";

export default function ScoreScale() {
  return (
    <div className=" 2xl:container px-3">
      <div className=" space-y-6 ">
        <FadeUp height={10}>
          <h3 className="text-3xl text-center text-primary font-bold">
            {" "}
            TOFEL Classes Score Scale
          </h3>
        </FadeUp>
        <FadeUpNormal delay={0.3}>
          <p className=" text-sm text-center max-w-4xl mx-auto">
            You will receive 4 scaled section scores and a total score in your
            TOEFL where each section has a score range of 0-30. These scale
            scores are then added together for a total score of 0-120. Each of
            the skills in the TOEFL have 4 or 5 proficiency levels meaning,
            where your score falls within that range will tell you your
            proficiency for that particular skill.
          </p>
        </FadeUpNormal>
      </div>
      <div className=" bg-white p-1 py-4 sm:p-6 rounded-lg border space-y-6 max-w-4xl mx-auto mt-10">
        <FadeUp height={10}>
          <h3 className=" font-bold text-center text-primary text-xl">
            Overall Score 0-120
          </h3>
        </FadeUp>
        <div className="  flex gap-4 md:gap-6 sm:flex-row flex-wrap   items-center justify-center px-4">
          {/* SPEAKING */}
          <FadeUpNormal delay={0.2}>
            <div className=" w-28 sm:w-40 bg-white shadow-lg p-4 sm:p-8 rounded-lg border flex  flex-col justify-center gap-2 items-center">
              <Mic size={36} className=" text-secondary" />
              <div>
                <h2 className=" text-sm  font-medium">Speaking</h2>
                <p className=" text-xs text-center">0-30</p>
              </div>
            </div>
          </FadeUpNormal>
          {/* READING */}
          <FadeUpNormal delay={0.4}>
            <div className="w-28 sm:w-40 bg-white shadow-lg p-4 sm:p-8 rounded-lg border flex  flex-col justify-center gap-2 items-center">
              <BookOpen size={36} className=" text-secondary" />
              <div>
                <h2 className=" text-sm  font-medium">Reading</h2>
                <p className=" text-xs text-center">0-30</p>
              </div>
            </div>
          </FadeUpNormal>
          {/* WRITING */}
          <FadeUpNormal delay={0.5}>
            <div className=" w-28 sm:w-40 bg-white   shadow-lg p-4 sm:p-8 rounded-lg border flex  flex-col justify-center gap-2 items-center">
              <NotebookPenIcon size={36} className=" text-secondary" />
              <div>
                <h2 className=" text-sm  font-medium">Writing</h2>
                <p className=" text-xs text-center">0-30</p>
              </div>
            </div>
          </FadeUpNormal>
          {/* LISTENING */}
          <FadeUpNormal delay={0.6}>
            <div className=" w-28 sm:w-40 bg-white  max-w-sm shadow-lg p-4 sm:p-8 rounded-lg border flex  flex-col justify-center gap-2 items-center">
              <Headphones size={36} className=" text-secondary" />
              <div>
                <h2 className=" text-sm  font-medium">Listening</h2>
                <p className=" text-xs text-center">0-30</p>
              </div>
            </div>
          </FadeUpNormal>
        </div>
      </div>
    </div>
  );
}
