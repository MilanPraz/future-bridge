import { H1, H3, H4, P } from "@/components/typography";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";
import { Plane, Clock, CircleCheck, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FadeUpNormal from "@/components/animation/FadeUpNormal";

const courses = [
  {
    title: "Masters in Business Administration",
    university: "Swinburne University",
    details: [
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
    ],
  },
  {
    title: "Masters in Computer Science",
    university: "Stanford University",
    details: [
      {
        icon: <Clock />,
        title: "Duration of Course",
        items: ["2 Years Full time", "Deferrable: No"],
      },
      {
        icon: <BookText />,
        title: "Academic Requirement",
        items: ["Bachelors Completed in a related field"],
      },
      {
        icon: <CircleCheck />,
        title: "IELTS Requirement",
        items: ["Overall 7.0 with no band less than 6.5"],
      },
      {
        icon: <Plane />,
        title: "Intake",
        items: ["Start Date: September"],
      },
    ],
  },
];

export default function Page() {
  return (
    <section className="overflow-hidden ">
      <div
        style={{
          background: "url(/courses/bg.svg) center/cover ",
        }}
        className="clippers object-cover object-center -top-20 h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary  via-transparent to-transparent"></div>
        <div className="">
          <div className="absolute top-[40%] sm:top-[40%] -translate-y-[50%] left-[2%] text-white max-w-3xl space-y-8">
            <FadeUpNormal delay={0.1}>
              <H1 className="headd text-white text-4xl lg:text-[64px]">
                Discover Your Future with Our Courses
              </H1>
            </FadeUpNormal>
            <FadeUpNormal delay={0.3}>
              <P className="tracking-wide max-w-[80%] text-sm sm:text-lg font-semibold">
                Unlock your potential and shape your future with our diverse
                range of courses tailored to advance your career, acquire new
                skills, or pursue your passions.
              </P>
            </FadeUpNormal>
          </div>
        </div>
      </div>

      <section className=" 2xl:container mx-auto px-3 sm:px-4">
        {/* FILTER SECTION */}
        <div className="flex flex-col lg:flex-row  gap-4 lg:gap-10 items-center">
          <H4 className="mb-4 lg:mb-0">Filter</H4>
          <Select>
            <SelectTrigger className="w-[250px] bg-transparent text-base border-2 rounded-xl">
              <SelectValue placeholder="Choose a program" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Programs</SelectLabel>
                <SelectItem value="diploma">Diploma</SelectItem>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[250px] bg-transparent text-base border-2 rounded-xl">
              <SelectValue placeholder="Choose a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Subjects</SelectLabel>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="computer-science">
                  Computer Science
                </SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[250px] bg-transparent text-base border-2 rounded-xl">
              <SelectValue placeholder="Choose a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="  mt-12 flex flex-row items-center justify-center flex-wrap lg:flex-col gap-4">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="p-4 border-black mt-8  lg:w-full w-[350px]"
            >
              <H3>{course.title}</H3>
              <P className="mt-2">{course.university}</P>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 mt-5">
                {course.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex flex-1 flex-col space-y-2 mb-4 lg:mb-0"
                  >
                    <div className="flex items-center">
                      {detail.icon}
                      <H4 className="ml-2">{detail.title}</H4>
                    </div>
                    <div className="ml-8">
                      {detail.items.map((item, itemIdx) => (
                        <P key={itemIdx}>{item}</P>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col lg:flex-row gap-4 justify-end mt-6">
                <Button className="bg-secondary">Inquire Now</Button>
                <Button className="bg-primary">Details</Button>
              </div>
            </Card>
          ))}
          <Pagination className="mt-20 px-3 mb-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="bg-secondary text-white"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </section>
  );
}
