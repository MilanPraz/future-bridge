import React from "react";
import { H1, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function page() {
  return (
    <section className="overflow-hidden ">
      <div
        style={{
          background: "url(/accomodation/accomodations.svg) center/cover ",
        }}
        className="clippers object-cover object-center -top-20 h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-transparent"></div>
        <div className="">
          <div className="absolute top-[40%] sm:top-[40%] -translate-y-[50%] left-[2%] text-white max-w-3xl space-y-8">
            <H1>Discover the best student accommodations for Students</H1>
            <P>
              Whether you're searching for cozy dormitories, fully-furnished
              apartments, or shared housing options, we have something perfect
              for every student's needs and preferences.
            </P>
          </div>
        </div>
      </div>
      <section className=" mx-auto 2xl:container  px-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-5 gap-6  place-items-center   mt-[-50px] ">
          {/* ACCOMODATION SEARCH */}
          <div className="relative w-full flex items-center">
            <Input
              type="text"
              placeholder="Search for accommodation"
              className="w-full pr-10 pl-4 py-2 rounded-xl focus:outline-none bg-transparent border-gray-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search size="18" />
            </div>
          </div>
          {/* CHOOSE A PROVINCE */}
          <div className="relative border  flex items-center w-full rounded-xl   bg-transparent border-gray-500">
            <div className="absolute left-3">
              <MapPin size="18" />
            </div>
            <Select>
              <SelectTrigger className="w-full text-sm ml-6 bg-transparent border-none outline-none ring-none focus:outline-none focus:ring-transparent">
                <SelectValue placeholder="Choose a Province" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Province</SelectLabel>
                  <SelectItem value="bagmati">Bagmati</SelectItem>
                  <SelectItem value="gandaki">Gandaki</SelectItem>
                  <SelectItem value="koshi">Koshi</SelectItem>
                  <SelectItem value="lumbini">Lumbini</SelectItem>
                  <SelectItem value="karnali">Karnali</SelectItem>
                  <SelectItem value="madhesh">Madhesh</SelectItem>
                  <SelectItem value="sudurpashchim">Sudurpashchim</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* PROPERTY TYPE */}
          <div className="flex items-center  w-full">
            <Select>
              <SelectTrigger className="  text-sm bg-transparent rounded-xl focus:outline-none  border-gray-500">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Property</SelectLabel>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* MAX AND MIN PRICE */}
          <div className="flex items-center border overflow-hidden w-full rounded-xl focus:outline-none bg-transparent border-gray-500">
            <Input
              type="text"
              placeholder="Min Price"
              className="w-full px-4 py-2 focus:outline-none border-none bg-transparent"
            />
            <Input
              type="text"
              placeholder="Max Price"
              className="w-full px-4 py-2 focus:outline-none border-none bg-transparent"
            />
          </div>
          <div className="flex  w-fit group  transition-all items-center  justify-end">
            <div className=" h-10  flex-shrink-0 scale-100 group-hover:scale-0 transition-all ease-in-out duration-300 w-10 flex items-center justify-center text-white rounded-full bg-primary">
              <ChevronRight size={16} />
            </div>

            <Button className="w-[150px] group-hover:w-[150px] flex-1 group-hover:-translate-x-4 transition-all duration-300 ease-linear rounded-full bg-primary">
              Apply
            </Button>
            <div className=" -translate-x-4  group-hover:w-10 flex-shrink-0 group-hover:h-10 group-hover:scale-100 ease-in-out transition-all scale-0 duration-300 flex items-center justify-center text-white rounded-full bg-primary">
              <ChevronRight size={16} />
            </div>
          </div>
        </div>

        <div className=" my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, idx) => (
            <div
              key={item}
              className="p-2 border bg-white rounded-xl mt-8 w-full"
            >
              <div>
                <img
                  src="/accomodation/room.svg"
                  alt="accomodation"
                  className="w-full"
                />
              </div>
              <div className="mt-2">
                <h2 className=" font-medium">
                  Luxury Hotel Accommodations in Boston
                </h2>
                <p className="mt-2 flex items-start text-sm text-muted-foreground">
                  <span className="mr-2">
                    <MapPin size="16" />
                  </span>
                  Kathmandu, Bagmati
                </p>
                <p className="mt-2 text-sm">Rs. 15,000/month</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 justify-start mt-2">
                <Button asChild className="bg-secondary">
                  <Link href={`/for-students/accomodations/${idx}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
