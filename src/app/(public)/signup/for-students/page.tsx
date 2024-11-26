"use client";
import React, { useState } from "react";
import { H3, H4, P } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import countryCodes from "@/data/phoneCode.json";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const defaultCountry = countryCodes.find(
    (country) => country.name === "Nepal"
  );
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    defaultCountry ? defaultCountry.name : countryCodes[0].name
  );

  const handleCountryCodeChange = (e: any) => {
    setSelectedCountryCode(e.target.value);
  };
  return (
    <section
      className="min-h-screen  lg:h-[120vh]  mx-auto  overflow-hidden relative z-1  p-4"
      style={{
        background: `#F7FFEF  url(/signup/bridge.svg) no-repeat   bottom/cover   `,
      }}
    >
      <img
        src="/signup/cloud1.png"
        className=" absolute top-4 right-6"
        alt="cloud"
      />

      <motion.img
        initial={{
          x: -20,
        }}
        animate={{
          x: 1800,
          transition: {
            duration: 10,
          },
        }}
        viewport={{ once: false }}
        src="/signup/cloud2.png"
        alt="cloud"
        className=" absolute top-4 left-6  z-0"
      />
      <motion.img
        initial={{
          x: -80,
        }}
        animate={{
          x: 1800,
          transition: {
            duration: 10,
          },
        }}
        viewport={{ once: false }}
        src="/signup/cloud2.png"
        alt="cloud"
        className=" absolute top-10 left-6  z-0"
      />
      <motion.img
        initial={{
          x: -80,
        }}
        animate={{
          x: -1800,
          transition: {
            duration: 10,
          },
        }}
        viewport={{ once: false }}
        src="/signup/cloud1.png"
        alt="cloud"
        className=" absolute top-10 right-6  z-0"
      />
      <div className="flex flex-col  mx-auto   p-0 sm:p-4 max-w-4xl w-full">
        <div className=" relative z-20">
          <H3 className="text-center lg:text-left">Register as A Student</H3>
          <P className="mt-2 text-center lg:text-left text-muted-foreground ">
            Once registered, you will get an email containing the username and
            password of your account.
          </P>
        </div>
        <div className="bg-white border border-black rounded-xl p-3 sm:p-6 mt-10 opacity-95 shadow-lg">
          <form>
            <div className="flex justify-between items-center">
              <H4>Register As a Student</H4>
              <Link href="/signup">
                <X size={25} className="cursor-pointer" />
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-4 mt-8">
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">First Name</Label>
                <Input type="text" placeholder="Enter your first name" />
              </div>
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Last Name</Label>
                <Input type="text" placeholder="Enter your last name" />
              </div>
              <div className="flex flex-col flex-1">
                <Label className="text-sm mb-2">Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-4 mt-4">
              <div className="flex flex-col mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Date of Birth</Label>
                <Input type="date" />
              </div>
              <div className="flex flex-col mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Phone Number</Label>
                <div className="flex items-center border border-gray-250 rounded ">
                  <select
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className=" text-sm bg-transparent"
                  >
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.code} ({country.dial_code})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="text-sm h-10 w-full  rounded border-none outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3  lg:gap-4 mt-4">
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Course Preference</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Courses</SelectLabel>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="Nursing">Nursing</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="MBBS">MBBS</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Passout Date</Label>
                <Input type="date" />
              </div>
              <div className="flex flex-col flex-1">
                <Label className="text-sm mb-2">English Proficiency Test</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>English Proficiency Test</SelectLabel>
                      <SelectItem value="IELTS">IELTS</SelectItem>
                      <SelectItem value="TOEFL">TOEFL</SelectItem>
                      <SelectItem value="PTE">PTE</SelectItem>
                      <SelectItem value="OET">OET</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid lg:grid-cols-3  lg:gap-4 mt-4">
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Score</Label>
                <Input type="text" placeholder="Enter your score" />
              </div>
              <div className="flex flex-col flex-1 mb-4 lg:mb-0">
                <Label className="text-sm mb-2">GPA/Percentage</Label>
                <Input type="text" placeholder="Enter your GPA/Percentage" />
              </div>
              <div className="flex flex-col flex-1">
                <Label className="text-sm mb-2">Out of</Label>
                <Input type="text" placeholder="Out of" />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button className="px-6 py-3 font-bold w-full max-w-xs">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
