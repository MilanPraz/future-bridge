import FadeUp from "@/components/animation/FadeUp";
import FadeUpNormal from "@/components/animation/FadeUpNormal";
import { H2, H3 } from "@/components/typography";
import { Calendar, File, NotebookPenIcon, UserCheck } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <File size={32} className=" text-primary" />,
    title: "Best TOFEL Lesson Plans",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <NotebookPenIcon size={32} className=" text-primary" />,
    title: "Daily Assignment",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <UserCheck size={32} className=" text-primary" />,
    title: "Revision Classes",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <Calendar size={32} className=" text-primary" />,
    title: "On Demand Test",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <File size={32} className=" text-primary" />,
    title: "Best TOFEL Lesson Plans",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <Calendar size={32} className=" text-primary" />,
    title: "Best TOFEL Lesson Plans",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <File size={32} className=" text-primary" />,
    title: "Best TOFEL Lesson Plans",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
  {
    icon: <UserCheck size={32} className=" text-primary" />,
    title: "Best TOFEL Lesson Plans",
    desc: "The BEST TOEFL Lesson Plans those are fun, comprehensive and geared around obtaining the maximum scores.",
  },
];

export default function WhyStudyHere() {
  return (
    <div className=" 2xl:container px-4">
      <div>
        <FadeUp height={10}>
          <h3 className="text-3xl text-center text-primary font-bold">
            Why Study TOFEL at Future Bridged?
          </h3>
        </FadeUp>
      </div>
      <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
        {features.map((f: any, idx: number) => {
          return (
            <div key={idx}>
              <FadeUpNormal delay={idx * 0.2}>
                <div className=" space-y-2">
                  {f.icon}
                  <h2 className=" text-primary  font-semibold">{f.title}</h2>
                  <p className=" text-muted-foreground  text-sm">{f.desc}</p>
                </div>
              </FadeUpNormal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
