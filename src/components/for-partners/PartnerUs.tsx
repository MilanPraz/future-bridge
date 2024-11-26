"use client";
import React, { useRef } from "react";
import { H2 } from "../typography";
import { Handshake, Headset, Landmark, Settings } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FadeUp from "../animation/FadeUp";
import FadeUpNormal from "../animation/FadeUpNormal";

export default function PartnerUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className=" 2xl:container px-4 space-y-20">
      <div className=" space-y-4">
        <FadeUpNormal delay={0.1}>
          <H2 className="  text-center font-bold text-primary">
            Why Partner With Us?
          </H2>
        </FadeUpNormal>
        <FadeUpNormal delay={0.3}>
          <p className=" text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            Partnering with Consult Advance means accessing growth
            opportunities, transparent payments, a global network, exclusive
            offerings, and industry insights. Let's collaborate for your success
            in education recruitment
          </p>
        </FadeUpNormal>
      </div>

      <div className="relative place-items-center grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? "100%" : 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="hidden sm:block w-full rounded-full h-[2px] bg-secondary absolute top-[50%] -translate-y-[50%]"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isInView ? "100%" : 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className=" hidden sm:block w-[2px] h-full rounded-full bg-secondary absolute left-[50%] -translate-x-[50%]"
        ></motion.div>

        {/* WEALTH */}
        <FadeUpNormal delay={0.1}>
          <div ref={ref} className="  flex gap-4 items-start w-[300px]">
            <Landmark className=" flex-shrink-0  text-primary" size={30} />
            <div>
              <h2 className=" text-lg sm:text-2xl font-semibold text-primary">
                A Wealth of Options
              </h2>
              <p className=" tracking-wide text-sm text-muted-foreground">
                Offer more to your students from 800+ universities globally
              </p>
            </div>
          </div>
        </FadeUpNormal>
        {/* Handshake */}
        <FadeUpNormal delay={0.3}>
          <div className=" flex gap-4 items-start w-[300px]">
            <Handshake className=" flex-shrink-0  text-primary" size={30} />
            <div>
              <h2 className=" text-lg sm:text-2xl font-semibold text-primary">
                A Wealth of Options
              </h2>
              <p className=" tracking-wide text-sm  text-muted-foreground">
                Offer more to your students from 800+ universities globally
              </p>
            </div>
          </div>
        </FadeUpNormal>
        <FadeUpNormal delay={0.5}>
          {/* Microphone */}
          <div className=" flex gap-4 items-start w-[300px]">
            <Headset className=" flex-shrink-0  text-primary" size={30} />
            <div>
              <h2 className=" text-lg sm:text-2xl font-semibold text-primary">
                A Wealth of Options
              </h2>
              <p className=" tracking-wide text-sm  text-muted-foreground">
                Offer more to your students from 800+ universities globally
              </p>
            </div>
          </div>
        </FadeUpNormal>
        {/* WEALTH */}
        <FadeUpNormal delay={0.7}>
          <div className=" flex gap-4 items-start w-[300px]">
            <Settings className=" flex-shrink-0  text-primary" size={30} />
            <div>
              <h2 className=" text-lg sm:text-2xl font-semibold text-primary">
                A Wealth of Options
              </h2>
              <p className=" tracking-wide text-sm  text-muted-foreground">
                Offer more to your students from 800+ universities globally
              </p>
            </div>
          </div>
        </FadeUpNormal>
      </div>
    </div>
  );
}
