"use client";
import React from "react";
import { H1, H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Plane, Clock, CircleCheck, BookText } from "lucide-react";
import Lottie from "lottie-react";
import reading from "@/components/lottie/each-courses/ghgh.json";

const studyCourse = [
  {
    name: "Study Master of Information Technology at Swinburne University",
    description:
      "Gain the knowledge and practical skills needed to excel in a constantly evolving field. This program prepares students for long-term careers across diverse industries. It also provides a pathway for students from non-IT backgrounds to pursue careers in IT.",
  },
];

const whyStudyContent = {
  title: "Why study Information Technology at Swinburne?",
  reasons: [
    {
      content: "Apply your skills through industry-related projects.",
    },
    {
      content: "Gain expertise in areas like system security and anti-hacking.",
    },
    {
      content:
        "Analyze, design, implement, and manage IT systems across any enterprise.",
    },
    {
      content:
        "Obtain real-world experience and understand how the IT workplace operates through industry placements.",
    },
    {
      content:
        "Graduate with in-demand skills applicable across various industries.",
    },
  ],
};

const whatWillYouStudy = [
  {
    title: "IT Core Units",
    description:
      "Six units (75 credit points) from the following list of units:",
    units: [
      "COS60004 Creating Web Applications",
      "COS60006 Introduction to Programming",
      "COS7004 User-Centered Design",
      "INF60007 Introduction to Business Information Systems",
      "COS60009 Data Management for the Big Data Age",
      "INF70005 Strategic Project Management",
    ],
  },
  {
    title: "Specialization-specific core units",
    description:
      "Complete all of the following specialization areas (100 credit points):",
    units: [
      "COS70006 Object Oriented Programming",
      "COS80013 Internet Security",
      "INF80043 IS/IT Risk Management",
      "TNE60002 Network Administration",
      "TNE80006 Secure Networks",
      "TNE80007 Enterprise Network Server Administration",
      "ICT90003 Applied Research Methods",
      "ICT90004 Applied Research Projects",
    ],
  },
  {
    title: "IT elective units",
    description: "Two units need to be chosen from the following electives:",
    units: [
      "TNE60006 Networks and Switching",
      "COS70007 Data Communications and Security",
      "ICT80004 Internship project",
    ],
  },
];

const feeStructure = {
  fee: [
    {
      name: "Course Fee",
      description:
        "The total tuition fee for the Master of Information Technology is AUD 40,000.",
    },
  ],
  scholarship: [
    {
      name: "International Excellence Scholarship",
      description:
        "This scholarship is available to high-achieving international students and provides a partial tuition fee waiver.",
    },
    {
      name: "Swinburne International Excellence Pathway Scholarship",
      description:
        "A scholarship for students progressing from Swinburne's pathway programs to a Master's degree, offering a tuition fee reduction.",
    },
    {
      name: "Swinburne International Excellence Undergraduate Scholarship",
      description:
        "Available to high-achieving undergraduate students progressing to a Master's degree at Swinburne.",
    },
  ],
};

const documentRequirements = [
  {
    content: "Academic Transcripts and proof of degree completion",
  },
  {
    content: "Proof of English language proficiency (e.g., IELTS, TOEFL)",
  },
  {
    content: "CV or resume",
  },
  {
    content: "Statement of Purpose (SOP)",
  },
  {
    content: "Letters of Recommendation",
  },
  {
    content: "Passport Copy",
  },
];

const courseDetails = [
  {
    icon: <Clock />,
    title: "Duration of Course",
    items: ["3 Years Full time", "Deferrable: Yes"],
  },
  {
    icon: <BookText />,
    title: "Academic Requirement",
    items: ["Bachelors Completed"],
  },
  {
    icon: <CircleCheck />,
    title: "IELTS Requirement",
    items: ["Overall 6.5 with no band less than 6.0"],
  },
  {
    icon: <Plane />,
    title: "Intake",
    items: ["Start Date: July"],
  },
];

export default function Page() {
  return (
    <section className="overflow-hidden 2xl:container">
      <div
        style={{
          background: "url(/courses/bg.svg) center/cover ",
        }}
        className="clippers object-cover object-center -top-20 h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-transparent"></div>
        <div className="">
          <div className="absolute top-[40%] sm:top-[40%] -translate-y-[50%] left-[2%] text-white max-w-3xl space-y-8">
            <H1 className="headd text-white text-4xl lg:text-[64px]">
              Why study Information Technology at Swinburne
            </H1>
            <Button className="bg-secondary">Inquiry Now</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-16  justify-center mx-4 lg:mx-auto mt-[-50px]">
        {/* Course Details */}
        {courseDetails.map((detail, index) => (
          <div key={index} className="flex flex-col space-y-2 mb-4 lg:mb-0">
            <div className="flex items-center">
              {detail.icon}
              <H4 className="ml-2">{detail.title}</H4>
            </div>
            <div className="ml-8">
              {detail.items.map((item, index) => (
                <P key={index}>{item}</P>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-20 mx-6">
        <H4>Program Overview</H4>
        {studyCourse.map((course, index) => (
          <div key={index} className="mt-6">
            <H3>{course.name}</H3>
            <div className="flex mt-4">
              <P>{course.description}</P>

              <img
                src="/courses/for-each/University.svg"
                alt="University"
                className="w-[400px] ml-4 lg:block hidden"
              />
            </div>
          </div>
        ))}
        <div className="mt-6">
          <H3>{whyStudyContent.title}</H3>
          <ul className="ml-4 mt-4 list-disc leading-9">
            {whyStudyContent.reasons.map((item, index) => (
              <li key={index}>
                <P>{item.content}</P>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row mt-6">
          <div className="flex flex-col lg:w-[60%]">
            <H3>What you will be studying ?</H3>
            {whatWillYouStudy.map((course, index) => (
              <div key={index}>
                <P className="font-bold mt-4">{course.title}</P>
                <P className="font-bold">{course.description}</P>

                <ul className="ml-8 mt-2 list-disc leading-9">
                  {course.units.map((unit, index) => (
                    <li key={index}>
                      <P>{unit}</P>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:w-[40%] relative lg:block hidden">
            <Lottie animationData={reading} className="w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-16 mx-6">
        <div className="flex flex-col lg:w-[60%]">
          <H3>Fee Structure / Scholarship</H3>
          {feeStructure.fee.map((fee, index) => (
            <div key={index} className="mt-4">
              <H4>{fee.name}</H4>
              <P className="mt-2">{fee.description}</P>
            </div>
          ))}

          <div className="mt-4">
            <H4>Scholarship/s</H4>
            {feeStructure.scholarship.map((scholarship, index) => (
              <div key={index} className="mt-4">
                <P className="mt-2 leading-relaxed">
                  <span className="font-semibold">{scholarship.name}: </span>{" "}
                  {scholarship.description}
                </P>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[40%] lg:block hidden">
          <img
            src="/courses/for-each/gradBoy.svg"
            alt="Fees"
            className="w-[450px] mt-[-200px]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-16 mx-6">
        <H3>Documents Requirements</H3>
        {documentRequirements.map((doc, index) => (
          <ul key={index} className="ml-8 mt-4 list-disc leading-6">
            <li>
              <P>{doc.content}</P>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
