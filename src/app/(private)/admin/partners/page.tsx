import React from "react";
import Title from "@/components/dashboard/Title";
import { H3, H4 } from "@/components/typography";
import {
  Building2Icon,
  Calendar,
  Eye,
  Globe,
  Globe2Icon,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function page() {
  return (
    <section className="2xl:container px-3  overflow-hidden">
      <div className="py-4">
        <Title
          title="Partners"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
      </div>
      <div className=" flex flex-col gap-8">
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <div
              key={idx}
              className=" rounded-2xl border p-4 space-y-4 relative w-full sm:w-fit"
            >
              <H4>Consult Advance Educational Consultancy</H4>
              <div className=" grid lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 items-center  gap-4 lg:gap-8">
                {/* BUSINESS TYPE */}
                <div className=" text-primary flex items-center gap-1">
                  <Building2Icon size={20} className=" flex-shrink-0" />
                  <h2 className=" font-medium">Business type:</h2>
                  <span className=" text-black text-sm">Public Limited</span>
                </div>
                {/* ADDRESS  */}
                <div className=" text-primary flex items-center gap-1">
                  <MapPin size={20} className=" flex-shrink-0" />
                  <h2 className=" font-medium">Business type:</h2>
                  <span className=" text-black text-sm">Public Limited</span>
                </div>
                {/* COUNTRY */}
                <div className=" text-primary flex items-center gap-1">
                  <Globe size={20} className=" flex-shrink-0" />
                  <h2 className=" font-medium">Business type:</h2>
                  <span className=" text-black text-sm">Public Limited</span>
                </div>
                {/* PHONE */}
                <div className=" text-primary flex items-center gap-1">
                  <Phone size={20} className=" flex-shrink-0" />
                  <h2 className=" font-medium">Business type:</h2>
                  <span className=" text-black text-sm">Public Limited</span>
                </div>
              </div>
              <div className=" absolute  -top-3 right-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Eye size={20} className="cursor-pointer text-secondary " />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>
                        Future Bridged Educational Consultancy
                      </DialogTitle>
                      <DialogDescription className=" text-muted-foreground flex items-center gap-1">
                        <MapPin size={16} /> Kathmandu
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      {/* ALL TAGS HERE */}
                      <div className="flex gap-4 items-center whitespace-nowrap flex-wrap">
                        <span className=" px-3 py-1 rounded-2xl  text-sm flex items-center gap-1 text-purple-900  bg-purple-200">
                          <MapPin size={16} /> Public Limited
                        </span>
                        <span className=" px-3 py-1 rounded-2xl  text-sm flex items-center gap-1 text-green-900  bg-green-200">
                          <Globe2Icon size={16} /> Nepal
                        </span>
                        <span className=" px-3 py-1 rounded-2xl  text-sm flex items-center gap-1 text-purple-900  bg-purple-200">
                          <Phone size={16} /> 9898989898
                        </span>
                        <span className=" px-3 py-1 rounded-2xl  text-sm flex items-center gap-1 text-green-900  bg-green-200">
                          <User size={16} /> 16587
                        </span>
                        <span className=" px-3 py-1 rounded-2xl  text-sm flex items-center gap-1 text-purple-900  bg-purple-200">
                          <Calendar size={16} /> Dec 10,2023
                        </span>
                      </div>
                      <div className=" mt-4">
                        <h2 className=" text-lg font-medium">
                          Services Offered
                        </h2>
                        <ul className=" list-disc ml-4 text-sm">
                          <li>Airport assistance</li>
                          <li>Part time job guidance</li>
                          <li>Accomodation services</li>
                        </ul>
                      </div>
                      <div className=" mt-4">
                        <h2 className=" text-lg font-medium">Contact Person</h2>
                        <ul className="  ml-4 text-sm">
                          <li>Phone : 9898989898</li>
                          <li>Email : milan@gmail.com</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
