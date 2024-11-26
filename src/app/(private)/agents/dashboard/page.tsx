"use client";
import Title from "@/components/dashboard/Title";
import { H3, H4, P } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { Calendar, Globe, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

export default function page() {
  const data = [
    { name: "Total Listings", percentage: 100 },
    { name: "Approved", percentage: 60 },
    { name: "Pending", percentage: 25 },
    { name: "Cancelled", percentage: 15 },
  ];

  return (
    <section className="2xl:container px-3  overflow-hidden">
      <div className="py-4">
        <Title
          title="Agent Dashboard"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
        <div className="flex flex-col lg:flex-row mt-6 w-full items-start">
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
            {/* AGENT PHOTO */}
            <img
              src="/home/person1.jpg"
              alt="profile"
              className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
            />
            <H4 className="lg:ml-12 mt-4 text-center lg:text-left">
              Alisha Khatri
            </H4>
            {/* DETAILS OF AGENT */}
            <div className="flex flex-col items-start lg:items-start space-y-2 mt-4">
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-primary" />
                <P className="text-gray-600">
                  Email: {""}
                  <span className="text-gray-600 font-normal">
                    alishakhatri@gmail.com
                  </span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-primary" />
                <P className="text-gray-600">
                  Phone: {""}
                  <span className="text-gray-600 font-normal">9841234567</span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-primary" />
                <P className="text-gray-600">
                  Address: {""}
                  <span className="text-gray-600 font-normal">Sankhamul</span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-primary" />
                <P className="text-gray-600">
                  Date of Birth: {""}
                  <span className="text-gray-600 font-normal">
                    12th May, 1998
                  </span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={20} className="text-primary" />
                <P className="text-gray-600">
                  Nationality: {""}
                  <span className="text-gray-600 font-normal">Nepalese</span>
                </P>
              </div>
            </div>
          </div>
          {/* AGENTS DETAIL AND PROPERTY LISTING */}
          <div className="w-full lg:w-3/4 flex flex-col mt-6 lg:mt-0 lg:ml-6">
            <div>
              <H3>Agent Details</H3>
              <P className="mt-2 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                sunt aut beatae natus quae provident perferendis? Consectetur
                aperiam temporibus veritatis suscipit ducimus. Aliquam quas
                perspiciatis illo in quaerat! Nam, molestiae. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Neque, sunt aut beatae
                natus quae provident perferendis? Consectetur aperiam temporibus
                veritatis suscipit ducimus. Aliquam quas perspiciatis illo in
                quaerat! Nam, molestiae.
              </P>
            </div>
            <div className="mt-6 flex flex-col lg:items-start lg:justify-start gap-4">
              <H3>Property Status</H3>
              <div className="flex flex-wrap gap-4 lg:items-start justify-center items-center ">
                {data.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 w-[180px] h-[180px] flex flex-col  text-left"
                  >
                    <P className="text-center items-center font-medium">
                      {item.name}
                    </P>
                    <CircularProgressbar
                      value={item.percentage}
                      text={`${item.percentage}%`}
                      className="w-[150px] h-[150px] mt-4"
                      strokeWidth={10}
                      styles={buildStyles({
                        textSize: "20px",
                        pathTransitionDuration: 0.5,
                        pathColor: `${
                          index === 0
                            ? "#43056C"
                            : index === 1
                            ? "#4DAF4E"
                            : index === 2
                            ? "#FF9A6C"
                            : index === 3
                            ? "#C72C5E"
                            : ""
                        }`,
                        textColor: "black",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#43056C",
                      })}
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <H3>Active Listing</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="p-2 bg-white border rounded-xl mt-8 w-full"
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
                    <Link href={`/for-students/accomodations/`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
