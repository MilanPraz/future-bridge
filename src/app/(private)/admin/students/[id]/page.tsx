import { H3, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Globe,
  Loader,
  Mail,
  MapPin,
  Phone,
  WalletMinimal,
} from "lucide-react";
import React from "react";
import Title from "@/components/dashboard/Title";

export default function page() {
  return (
    <section className="2xl:container px-4 ">
      <div className="py-4">
        <Title
          title="Students"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
        <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <img
            src="/home/person1.jpg"
            alt="profile"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover self-center sm:self-start"
          />
          <section>
            <div>
              <H3 className="text-primary text-center lg:text-left md:text-left">
                Alisha Khatri
              </H3>
              <P className="text-gray-500 mt-2 text-center lg:text-left md:text-left">
                Student
              </P>
              <div className="grid sm:grid-cols-2 grid-cols-1 items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Mail size={20} className="text-primary" />
                  <P className="font-medium">
                    Email:{" "}
                    <span className="text-gray-600 font-normal">
                      alisha@gmail.com
                    </span>
                  </P>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={20} className="text-primary" />
                  <P className="font-medium">
                    Phone:{" "}
                    <span className="text-gray-600 font-normal">
                      9876543210
                    </span>
                  </P>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-primary" />
                  <P className="font-medium">
                    Passout Date:{" "}
                    <span className="text-gray-600 font-normal">Jun 2022</span>
                  </P>
                </div>

                <div className="flex items-center space-x-2">
                  <Globe size={20} className="text-primary" />
                  <P className="font-medium">
                    Nationatily:{" "}
                    <span className="text-gray-600 font-normal">Nepali</span>
                  </P>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <MapPin size={20} className="text-primary" />
                  <P className="font-medium">
                    Address:{" "}
                    <span className="text-gray-600 font-normal">
                      Kathmandu, Nepal
                    </span>
                  </P>
                </div>
                <div className="flex items-center space-x-2">
                  <Loader size={20} className="text-primary" />
                  <P className="font-medium">
                    Processing Status:{" "}
                    <span className=" bg-yellow-300  text-yellow-900 font-normal p-1 px-3 rounded-2xl">
                      Pending
                    </span>
                  </P>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col">
              <H3>Test Scores:</H3>
              <div className="grid lg:grid-cols-2 grid-cols-1 items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-secondary  text-white px-3 flex items-center gap-2 py-1 rounded-full ">
                    IELTS:{""}
                    <span className=" font-medium">6.5</span>
                  </div>
                  <div className="bg-secondary  flex items-center gap-2 px-3 py-1 rounded-full text-white">
                    PTE:{""}
                    <span className=" font-medium">65</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
