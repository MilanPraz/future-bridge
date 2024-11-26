"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { H2, P } from "../typography";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/home/person1.jpg",
    alt: "person",
    title: "For Students One",
    desc: ` Explore the world's top universities with personalized guidance
            tailored to your aspirations. Join thousands of successful students
            who have found their path to success through our expert support.
            Let's make your dream a reality together.`,
  },
  {
    src: "/home/person2.jpg",
    alt: "person",
    title: "For Partners Two",
    desc: ` Explore the world's top universities with personalized guidance
            tailored to your aspirations. Join thousands of successful students
            who have found their path to success through our expert support.
            Let's make your dream a reality together.`,
  },
  {
    src: "/home/person3.jpg",
    alt: "person",
    title: "For Franchise Three",
    desc: ` Explore the world's top universities with personalized guidance
            tailored to your aspirations. Join thousands of successful students
            who have found their path to success through our expert support.
            Let's make your dream a reality together.`,
  },
  {
    src: "/home/person2.jpg",
    alt: "person",
    title: "For University Four",
    desc: ` Explore the world's top universities with personalized guidance
            tailored to your aspirations. Join thousands of successful students
            who have found their path to success through our expert support.
            Let's make your dream a reality together.`,
  },
  {
    src: "/home/person3.jpg",
    alt: "person",
    title: "For Instructors Five",
    desc: ` Explore the world's top universities with personalized guidance
            tailored to your aspirations. Join thousands of successful students
            who have found their path to success through our expert support.
            Let's make your dream a reality together.`,
  },
];
export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  console.log("current hai", current);
  return (
    <div>
      {" "}
      <div
        style={{
          background: "url(/home/hall.png) center/cover",
        }}
        className=" h-[100vh] lg:h-[70vh] grid grid-cols-1 overflow-hidden lg:grid-cols-2 p-4 place-items-center"
      >
        <div className=" overflow-hidden self-start lg:self-center">
          <AnimatePresence>
            {images.map((i, idx) => {
              return (
                <motion.div
                  key={idx}
                  className={cn(
                    "text-white 2xl:container  flex flex-col  space-y-4 items-start justify-center",
                    idx == current - 1 ? "block" : "hidden"
                  )}
                >
                  <div className="  h-10 overflow-hidden">
                    <motion.h2
                      animate={{ opacity: 1, y: idx == current - 1 ? 0 : 80 }}
                      // exit={{ opacity: 0, y: idx == current - 1 ? 0 : -80 }}
                      key={idx}
                      className={" text-white text-4xl font-bold"}
                    >
                      {images[current - 1]?.title}
                    </motion.h2>
                  </div>

                  <div className=" h-full  overflow-hidden">
                    <motion.p
                      key={idx}
                      animate={{ opacity: 1, y: idx == current - 1 ? 0 : 80 }}
                      className=" max-w-lg"
                    >
                      {images[current - 1]?.desc}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CAROUSEL PART */}
        <div
          className=" -order-1 lg:order-1
        "
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            setApi={setApi}
            opts={{
              align: "center",
            }}
            className="w-full   overflow-hidden max-w-xl mx-auto "
          >
            <CarouselContent className=" ">
              {images.map((i, idx) => {
                return (
                  <CarouselItem
                    key={idx}
                    className={cn(
                      " w-full sm:w-[100px] lg:w-[300px]     sm:basis-1/2  self-end"
                    )}
                  >
                    <div className="p-1 w-full ">
                      <Image
                        width={300}
                        height={100}
                        className={cn(
                          "w-full   object-cover transition-all  border-4 border-secondary rounded-md",
                          current == idx + 1
                            ? " h-[40vh] sm:h-[40vh] lg:h-[50vh]  w-[200px] mx-auto  lg:w-full"
                            : " h-[40vh] sm:h-[20vh] lg:h-[30vh]  mx-auto w-[200px] lg:w-full  object-top "
                        )}
                        src={i.src}
                        alt={i.alt}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div className="  flex w-full justify-center gap-3 py-2 md:py-4">
            {images.map((event: any, idx: number) => (
              <div
                key={idx}
                style={{ transition: "width 0.2s ease" }}
                className={cn(
                  "h-1 w-4 rounded-full  bg-neutral-300",
                  idx === current - 1 ? "w-10 h-1 bg-secondary" : " "
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
