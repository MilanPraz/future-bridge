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

export default function Page() {
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
          <ChangePasswordForm />
        </div>
      </div>
    </section>
  );
}
