import Title from "@/components/dashboard/Title";
import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import {
  Edit,
  Eye,
  Mail,
  PlusCircle,
  Trash2,
  WalletMinimal,
} from "lucide-react";
import { PiChalkboardTeacher } from "react-icons/pi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddInstitutionForm from "@/components/admin/AddInstitutionForm";

export default function Page() {
  return (
    <section className="2xl:container px-4">
      <div className="py-0">
        <Title
          title="Institutions"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
        <div className="flex flex-col mt-4">
          <div className="flex gap-2 items-center">
            <h2 className=" text-lg font-medium">Add Institutions</h2>
            <Dialog>
              <DialogTrigger className="" asChild>
                <PlusCircle
                  className=" cursor-pointer text-primary"
                  size={20}
                />
              </DialogTrigger>
              <DialogContent className="lg:w-[800px] w-[400px]  rounded">
                <DialogHeader>
                  <DialogTitle>Add Property </DialogTitle>
                  <DialogDescription>
                    Add your property details here.
                  </DialogDescription>
                </DialogHeader>
                <AddInstitutionForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-full mt-4 flex flex-col gap-4">
            {[1, 2, 3, 4].map((item, idx) => (
              <div
                key={idx}
                className=" border pt-10 sm:p-4 relative rounded-lg p-4 bg-transparent "
              >
                <div className="flex flex-row justify-between items-center">
                  <H4 className="text-primary">University of Sydney</H4>
                </div>

                {/* CRUD BUTTONS */}
                <div className="flex absolute right-3 top-2 space-x-2">
                  <span className="bg-transparent border rounded-lg  h-8 w-8 flex items-center justify-center hover:bg-green-100 cursor-pointer">
                    <Eye size={20} className="text-secondary" />
                  </span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <span className="bg-transparent border rounded-lg  h-8 w-8 flex items-center justify-center hover:bg-purple-100 cursor-pointer">
                        <Edit size={20} className="text-primary" />
                      </span>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Institutions </DialogTitle>
                        <DialogDescription>
                          Add institution details
                        </DialogDescription>
                      </DialogHeader>
                      {/* <EditEducation /> */}
                    </DialogContent>
                  </Dialog>
                  <span className="bg-transparent border rounded-lg  h-8 w-8 flex items-center justify-center hover:bg-red-100 cursor-pointer">
                    <Trash2 size={20} className="text-red-600" />
                  </span>
                </div>
                <div className="mt-4 ">
                  <div className="flex  lg:gap-10 gap-1 sm:flex-row flex-col items-start  sm:items-center">
                    <div className="flex items-center  whitespace-nowrap space-x-2">
                      <Mail size={20} className="text-primary" />
                      <P className="font-medium">
                        Email:{" "}
                        <span className="text-gray-600 font-normal">
                          sydneyuniversity@gmail.com
                        </span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PiChalkboardTeacher size={24} className="text-primary" />
                      <P className="font-medium">
                        Courses:{" "}
                        <span className="text-gray-600 font-normal">5</span>
                      </P>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
