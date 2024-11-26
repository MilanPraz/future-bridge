import Title from "@/components/dashboard/Title";
import React from "react";
import { Download, Eye, PlusCircle, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CommonDeleteBtn from "@/components/common/CommonDeleteBtn";

export default function page() {
  return (
    <section className="2xl:container  px-3 ">
      <div className="py-4">
        <Title
          title="My Documents"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
        <div className="flex flex-col mt-6">
          <div className="flex flex-row items-center">
            <H3>Add Documents</H3>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-transparent text-secondary ml-2">
                  <PlusCircle size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Documents </DialogTitle>
                  <DialogDescription>
                    Add your documents here.
                  </DialogDescription>
                </DialogHeader>
                {/* <EditEducation /> */}
              </DialogContent>
            </Dialog>
          </div>
          <div className="lg:w-full mt-4">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item}>
                <Card className="mt-4 p-4 relative">
                  <H4 className="text-primary">Document Name: Passport</H4>
                  {/* <div className="flex flex-row justify-between items-center"> */}
                  <div className=" absolute top-2 right-2  flex items-center gap-2">
                    <button className="bg-transparent">
                      <Eye size={20} className="text-secondary" />
                    </button>
                    <button className="bg-transparent ">
                      <Download size={20} className="text-black" />
                    </button>
                    <CommonDeleteBtn
                      size={20}
                      id="asdasa"
                      deleteAction={null}
                    />
                  </div>
                  {/* </div> */}
                  <div className="mt-4 ">
                    <div className="flex flex-col lg:flex-row lg:gap-20 gap-2">
                      <div className="flex items-center space-x-2">
                        <P className="font-medium">
                          Type:{" "}
                          <span className="text-gray-600 font-normal">
                            application/vnd.openxmlformats-officedocument
                          </span>
                        </P>
                      </div>
                      <div className="flex items-center space-x-2">
                        <P className="font-medium">
                          Size:{" "}
                          <span className="text-gray-600 font-normal">
                            1.2 MB
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
