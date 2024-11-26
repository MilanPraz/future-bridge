import React from "react";
import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Title from "@/components/dashboard/Title";

export default function Page() {
  return (
    <div className="2xl:container px-4">
      <div className="">
        <Title
          title="My Accomodation"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex flex-col   relative  pb-20   lg:flex-row lg:gap-8 mt-10">
        <div className="absolute   sm:top-0 bottom-2 right-0">
          <Button className=" bg-destructive hover:bg-destructive">
            Cancel Request
          </Button>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-[600px]">
          <div className="mb-4">
            <H3>
              Status:{" "}
              <span className=" bg-yellow-300 text-yellow-900  px-3 py-1 text-sm font-medium rounded-full">
                Pending
              </span>
            </H3>
            <P className="mt-2 font-medium">
              Booking Date:{" "}
              <span className="text-gray-600">12th March 2022</span>
            </P>
          </div>
          <img
            src="/accomodation/room.svg"
            alt="accomodation"
            className="w-full lg:w-[full] lg:max-w-xl"
          />
          <div className="mt-8 lg:mt-8 lg:w-full text-left ">
            <P>
              {" "}
              Geometric patterns meet stylish blonde and espresso woods and
              soothing gray tones to introduce our guests to some of the most
              sophisticated lodging in Boston at The Colonnade. Each of our
              well-appointed Boston accommodations feature floor-to-ceiling
              windows that open, flooding the inviting space with natural
              sunlight, fresh air, and unobstructed views.
            </P>
            <div>
              {" "}
              <H3 className="mt-4">Features</H3>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>24/7 Customer Support</li>
                <li>24/7 Security</li>
                <li>Bed with Mattress</li>
                <li>High Speed Internet</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ROOM DETAILS AND COST */}
        <div className="flex flex-col mt-4 lg:mt-20">
          <H4>Luxury Hotel Accommodations in Boston</H4>
          <P className=" mt-1 text-muted-foreground flex items-center">
            <MapPin size="18" className="mr-2" />
            Kathmandu, Bagmati
          </P>
          <P className=" mt-2">Rs. 15,000/month</P>
          <P>Area: 3846 sq.ft</P>
          <P>Minimum Deposit Amount : Rs.8787</P>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="border text-muted-foreground px-3 py-1 rounded-lg border-muted-foreground">
              24/7 Customer Support
            </span>
            <span className="border text-muted-foreground px-3 py-1 rounded-lg border-muted-foreground">
              24/7 Security
            </span>
            <span className="border text-muted-foreground px-3 py-1 rounded-lg border-muted-foreground">
              Bed with Mattress
            </span>
            <span className="border text-muted-foreground px-3 py-1 rounded-lg border-muted-foreground">
              High Speed Internet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
