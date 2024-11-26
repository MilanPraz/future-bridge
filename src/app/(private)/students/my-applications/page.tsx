import Title from "@/components/dashboard/Title";
import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { PiChalkboardTeacher } from "react-icons/pi";
import {
  Building2,
  Edit,
  GraduationCap,
  PlusCircle,
  Trash2,
  WalletMinimal,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CommonDeleteBtn from "@/components/common/CommonDeleteBtn";

export default function Page() {
  return (
    <section className="2xl:container px-3">
      <div className="py-4">
        <Title
          title="My Application"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="flex flex-row items-center">
            <H3>Browse All Courses Available</H3>
            <button className="bg-transparent text-secondary ml-2">
              <PlusCircle size={20} />
            </button>
          </div>
          <div className="w-full mt-4">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item}>
                <Card className="mt-4 p-4">
                  <div className="flex flex-row justify-between items-center">
                    <H4 className="text-primary">University of Sydney</H4>
                    <div className="flex space-x-2 items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="bg-transparent p-2">
                            <Edit size={20} className="text-secondary" />
                          </button>
                        </DialogTrigger>
                      </Dialog>
                      <CommonDeleteBtn
                        size={20}
                        id="sdjkfhsdjkfhsd"
                        deleteAction={null}
                      />
                      {/* <button className="bg-transparent p-2">
                        <Trash2 size={20} className="text-red-600" />
                      </button> */}
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Building2 size={20} className="text-primary" />
                        <P className="font-medium">
                          University Name:{" "}
                          <span className="text-gray-600 font-normal">
                            Dept. of Computer Science
                          </span>
                        </P>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PiChalkboardTeacher
                          size={20}
                          className="text-primary"
                        />
                        <P className="font-medium">
                          Tuition:{" "}
                          <span className="text-gray-600 font-normal">
                            $10000
                          </span>
                        </P>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GraduationCap size={20} className="text-primary" />
                        <P className="font-medium">
                          Level:{" "}
                          <span className="text-gray-600 font-normal">
                            Bachelors
                          </span>
                        </P>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
