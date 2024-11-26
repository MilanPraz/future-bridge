import React from "react";
import { H1, H2, H3, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import FAQ from "@/components/Home/FAQ";
import FadeUp from "@/components/animation/FadeUp";
import FadeUpNormal from "@/components/animation/FadeUpNormal";

export default function Page() {
  return (
    <section className="overflow-hidden ">
      <div
        style={{
          background: "url(/universities/bg.svg) center/cover ",
        }}
        className="clippers object-cover object-center -top-20 h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-transparent"></div>
        <div className="">
          <div className="absolute top-[40%] sm:top-[40%] -translate-y-[50%] left-[5%] text-white max-w-3xl space-y-8">
            <FadeUpNormal delay={0.1}>
              <H1>Study in the global university of your choice!</H1>
            </FadeUpNormal>
            <FadeUpNormal delay={0.3}>
              <P>
                Thousands of our students are pursuing their programs and
                aspirations in eminent universities globally and KC welcomes you
                to pursue yours!
              </P>
            </FadeUpNormal>
            <FadeUpNormal delay={0.5}>
              <Button className="bg-secondary">Explore Now</Button>
            </FadeUpNormal>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-6 justify-center mx-4 lg:ml-20 mt-[-50px]">
        <div className="relative w-full  flex items-center">
          <Input
            type="text"
            placeholder="Search for universities"
            className="w-full pr-10 pl-4 py-2 focus:outline-none border-gray-500 h-12 bg-transparent  rounded-xl"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search size="18" />
          </div>
        </div>
        <div className="relative border flex items-center w-full rounded-xl   bg-transparent border-gray-500">
          <div className="absolute left-3">
            <MapPin size="18" />
          </div>
          <Select>
            <SelectTrigger className="w-full text-sm ml-6 bg-transparent border-none outline-none ring-none focus:outline-none focus:ring-transparent">
              <SelectValue placeholder="Choose a Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="relative border outline-none flex items-center w-full rounded-xl ring-none focus:outline-none bg-transparent border-gray-500">
          <Select>
            <SelectTrigger className="w-full text-sm border-none bg-transparent ring-none focus:outline-none outline-none">
              <SelectValue placeholder="Choose a Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Course</SelectLabel>
                <SelectItem value="mbbs">MBBS</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="it">IT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Button className="bg-primary sm:w-[150px] sm:text-lg">Apply</Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <FadeUpNormal>
          <H2 className="text-center mt-16 text-primary">
            Study in the global university of your choice!
          </H2>
        </FadeUpNormal>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 m-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <FadeUpNormal delay={idx * 0.3} key={idx}>
              <img
                key={item}
                src="/universities/all.svg"
                alt="university"
                className="w-[200px] lg:w-[280px]"
              />
            </FadeUpNormal>
          ))}
        </div>
        <Button className="bg-primary lg:mt-16 mt-10  sm:w-[150px] sm:text-lg">
          View All
        </Button>
      </div>
      <div>
        <FAQ />
      </div>
    </section>
  );
}
