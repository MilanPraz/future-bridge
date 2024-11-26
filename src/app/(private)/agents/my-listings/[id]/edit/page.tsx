import React from "react";
import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Title from "@/components/dashboard/Title";

export default function Page() {
  return (
    <div className="container py-4">
      <div className="">
        <Title
          title="Edit your Property"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-8 mt-10">
        <div className="flex flex-col items-center lg:items-start lg:w-[600px]">
          <div className="mb-4">
            <H4>
              Availaility:{" "}
              <span className=" text-base font-medium px-2 py-1 text-white bg-yellow-500 rounded-full">
                Pending
              </span>
            </H4>
          </div>
          <img
            src="/accomodation/room.svg"
            alt="accomodation"
            className="w-full lg:w-[full] lg:max-w-xl"
          />
          <div className="mt-8 lg:mt-8 lg:w-full text-left text-justify">
            <P>
              {" "}
              Geometric patterns meet stylish blonde and espresso woods and
              soothing gray tones to introduce our guests to some of the most
              sophisticated lodging in Boston at The Colonnade. Each of our
              well-appointed Boston accommodations feature floor-to-ceiling
              windows that open,flooding the inviting space with natural
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
        <div className="flex flex-col mt-4 lg:mt-12">
          <H4>Luxury Hotel Accommodations in Boston</H4>
          <P className="mt-2 flex items-center">
            <MapPin size="18" className="mr-2" />
            Kathmandu, Bagmati
          </P>
          <P className="mt-2">Rs. 15,000/month</P>
          <div className="flex flex-col lg:flex-row gap-4 justify-start mt-4">
            <Button className="bg-primary">Edit</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className=" py-1 px-2 rounded-xl text-muted-foregraound border">
              24/7 Customer Support
            </span>
            <span className=" py-1 px-2 rounded-xl text-muted-foregraound border">
              24/7 Security
            </span>
            <span className=" py-1 px-2 rounded-xl text-muted-foregraound border">
              Bed with Mattress
            </span>
            <span className=" py-1 px-2 rounded-xl text-muted-foregraound border">
              High Speed Internet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
