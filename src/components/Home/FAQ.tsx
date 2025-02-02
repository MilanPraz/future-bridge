"use client";
import React, { useRef, useState } from "react";
import { H2, H4 } from "../typography";
import { faqs } from "./data";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { motion, stagger, useInView, useScroll } from "framer-motion";

export default function FAQ() {
  const [tab, setTab] = useState(faqs[0].category);
  // const { scrollY, scrollYProgress } = useScroll({ target: containerrRef });

  const svgRef1 = useRef(null);
  const svgRef2 = useRef(null);
  const inView1 = useInView(svgRef1);
  const inView2 = useInView(svgRef2);
  // const path = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };
  console.log("tab is", tab);
  return (
    <div className="relative py-20 2xl:container px-4 ">
      {/* QUESTION MARKS  */}
      <div
        ref={svgRef1}
        className=" w-20 absolute right-10 md:right-[30%] lg:right-[40%]"
      >
        <motion.svg
          width="84"
          height="83"
          viewBox="0 0 84 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: inView1 ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            // viewport={{ once: true }}
            d="M64.6975 27.5686C62.2754 23.6819 58.8072 20.5561 54.6904 18.5495C50.919 16.7164 46.7455 15.8665 42.558 16.079C39.6374 16.2869 36.823 17.2589 34.3969 18.8975C31.2913 21.1221 28.8135 24.1114 27.2035 27.5755C27.0629 27.8583 26.9804 28.1663 26.9609 28.4814C26.9414 28.7966 26.9852 29.1125 27.0898 29.4104C27.1944 29.7084 27.3576 29.9824 27.5698 30.2163C27.7821 30.4501 28.039 30.6391 28.3255 30.772L35.8527 34.2736C36.3696 34.5117 36.9549 34.5564 37.5019 34.3995C38.0489 34.2426 38.5214 33.8945 38.8333 33.4186C40.2647 31.214 43.5136 27.8922 49.1918 30.4154C50.6368 31.0264 51.8556 32.0725 52.6784 33.4083C53.5012 34.744 53.8872 36.3029 53.7825 37.8681C53.7089 39.1958 53.3232 40.4875 52.6568 41.6381C51.9904 42.7888 51.062 43.7662 49.9471 44.4908C46.4085 46.8606 42.4888 45.6519 40.4673 44.7205C39.3522 44.2053 38.0787 44.1518 36.9245 44.5716C35.7703 44.9913 34.8289 45.8504 34.3057 46.9614L30.5394 55.0593C30.2755 55.6282 30.2481 56.2786 30.4633 56.8677C30.6784 57.4569 31.1185 57.9368 31.6869 58.202L39.0208 61.6136C39.5898 61.8775 40.2402 61.905 40.8294 61.69C41.4185 61.475 41.8983 61.0352 42.1634 60.4669L42.9548 58.7654C42.964 58.7455 42.9793 58.729 42.9985 58.7183C43.0176 58.7076 43.0397 58.7032 43.0615 58.7058C46.4627 59.0245 49.8923 58.5965 53.1105 57.4517C58.5249 55.4937 62.6118 51.6166 65.2574 45.9283C69.0437 37.7877 67.0427 31.451 64.6975 27.5686Z"
            // fill="#43056C"
            stroke="#43056C"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: inView1 ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            d="M34.771 62.1161L34.1294 61.8175C32.6544 61.1334 30.9684 61.0626 29.4416 61.6207C27.9147 62.1788 26.6721 63.3202 25.9866 64.794C25.3011 66.2679 25.2289 67.9537 25.7857 69.4811C26.3426 71.0085 27.483 72.2526 28.9564 72.94L29.598 73.2384C31.073 73.9233 32.7595 73.9946 34.2868 73.4366C35.8141 72.8787 37.0571 71.7372 37.7428 70.2629C38.4285 68.7887 38.5006 67.1025 37.9433 65.5748C37.3861 64.0472 36.245 62.8031 34.771 62.1161Z"
            stroke="#43056C"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
      <div
        ref={svgRef2}
        className="hidden lg:block w-20 absolute left-[40%] bottom-2"
      >
        <motion.svg
          width="84"
          height="83"
          viewBox="0 0 84 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: inView2 ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            // viewport={{ once: true }}
            d="M64.6975 27.5686C62.2754 23.6819 58.8072 20.5561 54.6904 18.5495C50.919 16.7164 46.7455 15.8665 42.558 16.079C39.6374 16.2869 36.823 17.2589 34.3969 18.8975C31.2913 21.1221 28.8135 24.1114 27.2035 27.5755C27.0629 27.8583 26.9804 28.1663 26.9609 28.4814C26.9414 28.7966 26.9852 29.1125 27.0898 29.4104C27.1944 29.7084 27.3576 29.9824 27.5698 30.2163C27.7821 30.4501 28.039 30.6391 28.3255 30.772L35.8527 34.2736C36.3696 34.5117 36.9549 34.5564 37.5019 34.3995C38.0489 34.2426 38.5214 33.8945 38.8333 33.4186C40.2647 31.214 43.5136 27.8922 49.1918 30.4154C50.6368 31.0264 51.8556 32.0725 52.6784 33.4083C53.5012 34.744 53.8872 36.3029 53.7825 37.8681C53.7089 39.1958 53.3232 40.4875 52.6568 41.6381C51.9904 42.7888 51.062 43.7662 49.9471 44.4908C46.4085 46.8606 42.4888 45.6519 40.4673 44.7205C39.3522 44.2053 38.0787 44.1518 36.9245 44.5716C35.7703 44.9913 34.8289 45.8504 34.3057 46.9614L30.5394 55.0593C30.2755 55.6282 30.2481 56.2786 30.4633 56.8677C30.6784 57.4569 31.1185 57.9368 31.6869 58.202L39.0208 61.6136C39.5898 61.8775 40.2402 61.905 40.8294 61.69C41.4185 61.475 41.8983 61.0352 42.1634 60.4669L42.9548 58.7654C42.964 58.7455 42.9793 58.729 42.9985 58.7183C43.0176 58.7076 43.0397 58.7032 43.0615 58.7058C46.4627 59.0245 49.8923 58.5965 53.1105 57.4517C58.5249 55.4937 62.6118 51.6166 65.2574 45.9283C69.0437 37.7877 67.0427 31.451 64.6975 27.5686Z"
            // fill="#43056C"
            stroke="#43056C"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: inView2 ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            d="M34.771 62.1161L34.1294 61.8175C32.6544 61.1334 30.9684 61.0626 29.4416 61.6207C27.9147 62.1788 26.6721 63.3202 25.9866 64.794C25.3011 66.2679 25.2289 67.9537 25.7857 69.4811C26.3426 71.0085 27.483 72.2526 28.9564 72.94L29.598 73.2384C31.073 73.9233 32.7595 73.9946 34.2868 73.4366C35.8141 72.8787 37.0571 71.7372 37.7428 70.2629C38.4285 68.7887 38.5006 67.1025 37.9433 65.5748C37.3861 64.0472 36.245 62.8031 34.771 62.1161Z"
            stroke="#43056C"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
      {/* <img
        src="/home/questionMark.png"
        alt="question"
        className=" w-20 absolute right-10 md:right-[30%] lg:right-[40%]"
      />
      <img
        src="/home/questionMark.png"
        alt="question"
        className=" hidden lg:block w-20 absolute left-[40%] bottom-2"
      /> */}

      <H2 className="py-10 text-center text-primary">FAQ's</H2>

      <div className=" mx-auto flex lg:flex-row flex-col gap-10">
        <div className=" w-[80%] mx-auto lg:w-[30%]  font-medium text-center space-x-2 md:space-y-6">
          <H4 className=" text-primary text-xl text-center w-[70%]">
            Categories
          </H4>
          {/* FOR SMALL SCREEN SHOW IN SELECT */}

          <Select value={tab} onValueChange={(val) => setTab(val)}>
            <SelectTrigger className="w-full lg:hidden  flex outline-none">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent className=" outline-none">
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {faqs.map((f, idx) => {
                  return (
                    <SelectItem key={idx} value={f.category}>
                      {f.category}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <motion.div className="  hidden w-[70%] xl:whitespace-nowrap  mx-auto  lg:flex flex-col gap-4">
            {faqs.map((f, idx) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
                    filter: "blur(20px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,

                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      delay: idx * 0.2,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setTab(f.category)}
                    className={cn(
                      " px-6 py-2 border border-primary rounded-xl  w-full",
                      f.category === tab
                        ? " bg-primary text-white border-primary"
                        : " bg-white"
                    )}
                    key={idx}
                  >
                    {f.category}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className=" text-muted-foreground  w-full">
          <Accordion type="single" collapsible className=" w-full space-y-5">
            {faqs
              .find((f) => f.category === tab)!
              .faq.map((f, idx) => {
                return (
                  <AccordionItem
                    className=" border rounded-xl px-4"
                    key={idx}
                    value={`${idx}`}
                  >
                    <AccordionTrigger
                      className={cn(
                        "hover:text-primary text-start  text-sm md:text-base"
                      )}
                    >
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent>{f.a} </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
