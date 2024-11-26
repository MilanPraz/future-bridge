"use client";
import React, { useEffect, useState } from "react";
import { H2, H3, H4 } from "../typography";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "../animation/FadeUp";

export default function HowItWorks() {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirst((prev) => (prev + 1) % 5); // Loop through 0 to 3
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  console.log("first count", first);
  return (
    <div className="  space-y-20">
      <div className=" space-y-4">
        <FadeUp>
          <H2 className="  text-center font-bold text-primary">How It Works</H2>
        </FadeUp>
      </div>
      <div className=" h-[40vh] md:h-[50vh] lg:h-[60vh] relative overflow-y-hidden    mx-auto flex  flex-col items-center  justify-center lg:pr-16 ">
        <div className="">
          {/* HALF CIRCLE */}
          <div className=" hidden md:block border-4 absolute  md:-left-[220px] lg:-left-[260px] top-0 border-primary h-[40vh] md:h-[50vh] lg:h-[60vh]   w-[40vh] md:w-[50vh] lg:w-[60vh] rounded-full"></div>
          <AnimatePresence>
            {first === 0 && (
              <motion.div
                key={"1stdot"}
                initial={{ y: 500, x: -200 }}
                animate={{
                  y: first === 0 ? 0 : -500,
                  x: first === 0 ? 0 : 200,
                  transition: { ease: "linear" },
                }}
                exit={{
                  y: -500,
                  x: -200,
                }}
                className="text-lg font-semibold hidden md:grid text-center text-white  place-items-center w-20 h-20  bg-primary rounded-full left-[110px]  lg:left-[150px] top-[41%]  -translate-y-[50%] absolute"
              >
                1
              </motion.div>
            )}
            {first === 1 && (
              <motion.div
                key={"2nddot"}
                initial={{ y: 500, x: -200 }}
                animate={{
                  y: first === 1 ? 0 : -500,
                  x: first === 1 ? 0 : 200,
                  transition: { ease: "linear" },
                }}
                exit={{
                  y: -500,
                  x: -200,
                }}
                className="text-lg font-semibold  hidden md:grid text-center text-white  place-items-center w-20 h-20  bg-primary rounded-full left-[110px]   lg:left-[150px] top-[41%]  -translate-y-[50%] absolute"
              >
                2
              </motion.div>
            )}
            {first === 2 && (
              <motion.div
                key={"3rddot"}
                initial={{ y: 500, x: -200 }}
                animate={{
                  y: first === 2 ? 0 : -500,
                  x: first === 2 ? 0 : 200,
                  transition: { ease: "linear" },
                }}
                exit={{
                  y: -500,
                  x: -200,
                }}
                className="text-lg font-semibold hidden md:grid text-center text-white  place-items-center w-20 h-20  bg-primary rounded-full left-[110px]  lg:left-[150px] top-[41%]  -translate-y-[50%] absolute"
              >
                3
              </motion.div>
            )}
            {first === 3 && (
              <motion.div
                key={"4thdot"}
                initial={{ y: 500, x: -200 }}
                animate={{
                  y: first === 3 ? 0 : -500,
                  x: first === 3 ? 0 : 200,
                  transition: { ease: "linear" },
                }}
                exit={{
                  y: -500,
                  x: -200,
                }}
                className=" text-lg font-semibold  hidden md:grid text-center text-white  place-items-center w-20 h-20  bg-primary rounded-full left-[110px]  lg:left-[150px] top-[41%]  -translate-y-[50%] absolute"
              >
                4
              </motion.div>
            )}
            {first === 4 && (
              <motion.div
                key={"5thdot"}
                initial={{ y: 500, x: -200 }}
                animate={{
                  y: first === 4 ? 0 : -500,
                  x: first === 4 ? 0 : 200,
                  transition: { ease: "linear" },
                }}
                exit={{
                  y: -500,
                  x: -200,
                }}
                className=" text-lg font-semibold  hidden md:grid text-center text-white  place-items-center w-20 h-20  bg-primary rounded-full left-[110px]  lg:left-[150px] top-[41%]  -translate-y-[50%] absolute"
              >
                5
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* <section className=" bg-black h-full grid place-items-center overflow-hidden   mx-auto  w-[99%]  "> */}
        <AnimatePresence>
          {first === 0 && (
            <motion.div
              initial={{ y: 500 }}
              animate={{
                y: first === 0 ? 0 : -500,
                transition: { ease: "linear" },
              }}
              exit={{
                y: -500,
              }}
              key="1st"
              className=" gap-4   absolute md:right-10  mx-auto  w-[70%] lg:w-[75%]  flex sm:flex-row flex-col items-center justify-between"
            >
              <H3 className=" sm:-order-1 order-1">
                Students Check Their Eligibility
              </H3>
              <img
                src="/for-institutions/first.svg"
                width={500}
                className=" w-[200px] sm:w-[180px] lg:w-[300px]"
              />
            </motion.div>
          )}

          {first === 1 && (
            <motion.div
              initial={{ y: 500 }}
              animate={{
                y: first === 1 ? 1 : -500,
                transition: { ease: "linear" },
              }}
              exit={{
                y: -500,
              }}
              key="2nd"
              className="  gap-4  absolute md:right-10   mx-auto  w-[70%] lg:w-[75%]  flex sm:flex-row flex-col items-center justify-between"
            >
              <H3 className=" sm:-order-1 order-1">Students Apply</H3>
              <img
                src="/for-institutions/second.svg"
                width={500}
                className=" w-[180px] sm:w-[220px] lg:w-[300px]"
              />
            </motion.div>
          )}

          {first === 2 && (
            <motion.div
              initial={{ y: 500 }}
              animate={{
                y: first === 2 ? 0 : -500,
                transition: { ease: "linear" },
              }}
              exit={{
                y: -500,
              }}
              key="3rd"
              className="gap-4   absolute md:right-10  w-[70%] lg:w-[75%] flex items-center sm:flex-row flex-col justify-between"
            >
              <H3 className=" sm:-order-1 order-1">Students Get Accepted</H3>
              <img
                src="/for-institutions/third.svg"
                width={500}
                className=" w-[100px] sm:w-[150px]  lg:w-[200px]"
              />
            </motion.div>
          )}
          {first === 3 && (
            <motion.div
              initial={{ y: 500 }}
              animate={{
                y: first === 3 ? 0 : -500,
                transition: { ease: "linear" },
              }}
              exit={{
                y: -500,
              }}
              key="4th"
              className=" gap-4  absolute md:right-10   w-[70%] lg:w-[75%] flex items-center sm:flex-row flex-col justify-between"
            >
              <H3 className=" sm:-order-1 order-1">
                Students Applies For Visa
              </H3>
              <img
                src="/for-institutions/fourth.svg"
                width={500}
                className=" w-[150px] sm:w-[180px] lg:w-[320px]"
              />
            </motion.div>
          )}
          {first === 4 && (
            <motion.div
              initial={{ y: 500 }}
              animate={{
                y: first === 4 ? 0 : -500,
                transition: { ease: "linear" },
              }}
              exit={{
                y: -500,
              }}
              key="5th"
              className=" gap-4  absolute md:right-10   w-[70%] lg:w-[75%] flex items-center sm:flex-row flex-col justify-between"
            >
              <H3 className=" sm:-order-1 order-1">Students Journey Begins</H3>
              <img
                src="/for-institutions/fifth.svg"
                width={500}
                className=" w-[150px] sm:w-[180px] lg:w-[320px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* </section> */}
      </div>
    </div>
  );
}
