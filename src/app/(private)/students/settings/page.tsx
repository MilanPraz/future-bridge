"use client";
import Title from "@/components/dashboard/Title";
import { Card } from "@/components/ui/card";
import { LockKeyhole, User } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { H4, P } from "@/components/typography";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import PersonalDetailsForm from "@/components/students-setting/PersonalDetailsForm";
import ChangePasswordForm from "@/components/students-setting/ChangePasswordForm";

function PersonalDetailsFormContainer() {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <div className="personal-details-form" ref={ref}>
      <PersonalDetailsForm />
    </div>
  );
}

export default function page() {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <section className="2xl:container px-3">
      <div className="py-4">
        <Title
          title="My Setting"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
        <div className="mt-10">
          <AnimatePresence>
            <motion.div
              onClick={() => {
                setShowPersonalDetails(!showPersonalDetails);
                setShowChangePassword(false);
              }}
            >
              <motion.div
                initial={{
                  height: "90px",
                }}
                animate={{
                  height: showPersonalDetails ? "100%" : "90px",
                }}
                transition={{ duration: 0.8, ease: "backIn" }}
                className={`p-3 flex items-start  overflow-hidden   flex-col bg-transparent border rounded-lg`}
              >
                <div className=" flex items-center cursor-pointer">
                  <User size={40} className="mr-4" />
                  <div>
                    <H4>Manage Personal Details</H4>
                    <P className="mt-2">Update your personal details</P>
                  </div>
                </div>
                <PersonalDetailsFormContainer />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10">
          <div
            // whileTap={{ scale: 1 }}
            onClick={() => {
              setShowChangePassword(!showChangePassword);
              setShowPersonalDetails(false);
            }}
          >
            <AnimatePresence>
              <motion.div
                initial={{
                  height: "90px",
                }}
                animate={{
                  height: showChangePassword ? "400px" : "90px",
                }}
                transition={{ duration: 0.8, ease: "backIn" }}
                className={`p-3 flex items-start  overflow-hidden   flex-col bg-transparent border rounded-lg`}
              >
                <div className=" flex items-center cursor-pointer w-full">
                  <LockKeyhole size={40} className="mr-4" />
                  <div>
                    <H4>Manage Password</H4>
                    <P className="mt-2">Change your current password</P>
                  </div>
                </div>
                <ChangePasswordForm />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
