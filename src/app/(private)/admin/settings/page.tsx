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

function ChangePasswordFormContainer() {
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
    <div className="change-password-form" ref={ref}>
      <ChangePasswordForm />
    </div>
  );
}

export default function Page() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <section className="container">
      <div className="py-4">
        <Title
          title="Setting"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />

        <div className="mt-10">
          <motion.div
            whileTap={{ scale: 1 }}
            onClick={() => {
              setShowChangePassword(!showChangePassword);
            }}
          >
            <Card className="p-3 flex items-center bg-transparent">
              <LockKeyhole size={40} className="mr-4" />
              <div>
                <H4>Manage Password</H4>
                <P className="mt-2">Change your current password</P>
              </div>
            </Card>
          </motion.div>
          <AnimatePresence>
            {showChangePassword ? <ChangePasswordFormContainer /> : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
