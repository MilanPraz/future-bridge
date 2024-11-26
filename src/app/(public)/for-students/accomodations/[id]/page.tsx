import React from "react";
import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import PageLoader from "@/components/common/PageLoader";

export default function page() {
  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="flex flex-col items-center lg:items-start lg:w-[600px]">
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
                <li>High-speed wired and wireless Internet access</li>
                <li>Plush Sealy pillow-top mattresses</li>
                <li>Bed with Mattress</li>
                <li>High Speed Internet</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 lg:mt-10">
          <H4>Luxury Hotel Accommodations in Boston</H4>
          <p className="mt-2 text-muted-foreground flex items-center">
            <MapPin size="18" className="mr-2" />
            Kathmandu, Bagmati
          </p>
          <p className="mt-2 text-black">Rs. 15,000/month</p>
          <div className="flex flex-col lg:flex-row gap-4 justify-start mt-4">
            <Button className="bg-primary">Login to Book</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className=" p-2 rounded-xl py-1 bg-transparent text-muted-foreground border">
              24/7 Customer Support
            </span>
            <span className=" p-2 rounded-xl py-1 bg-transparent text-muted-foreground border">
              24/7 Security
            </span>
            <span className=" p-2 rounded-xl py-1 bg-transparent text-muted-foreground border">
              Bed with Mattress
            </span>
            <span className=" p-2 rounded-xl py-1 bg-transparent text-muted-foreground border">
              High Speed Internet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
