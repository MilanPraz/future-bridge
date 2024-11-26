import Title from "@/components/dashboard/Title";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H3, H4, P } from "@/components/typography";
import { Eye, Trash2, PlusCircle } from "lucide-react";
import Link from "next/link";
import CommonDeleteBtn from "@/components/common/CommonDeleteBtn";

export default function page() {
  return (
    <section className="2xl:container px-3 ">
      <div className="py-4">
        <Title
          title="My Accomodation"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-10 mt-8">
        <div className="flex flex-row items-center">
          <H3>View All Available Accomodations</H3>
          <Button className="bg-transparent text-secondary ml-2">
            <PlusCircle size={20} />
          </Button>
        </div>
        <div className="w-full mt-4">
          {[1, 2, 3].map((item, idx) => (
            <div key={item}>
              <Card className="mt-4 p-4 relative pt-8 sm:pt-4">
                <H4 className="text-primary">
                  Accomodation Name: Sydney Student Living
                </H4>

                <div className="flex  absolute top-2 right-2 items-center gap-2">
                  <Link href={`/students/my-accomodation/${idx}`}>
                    <Eye size={20} className="text-secondary" />
                  </Link>
                  <CommonDeleteBtn id="sdadd" deleteAction={null} size={20} />
                </div>
                <div className="mt-4 ">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-20 gap-2">
                    <div className="flex items-center space-x-2">
                      <P className="font-medium">
                        Location:{" "}
                        <span className="text-gray-600 font-normal">
                          Sydney, Australia
                        </span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <P className="font-medium">
                        Price:{" "}
                        <span className="text-gray-600 font-normal">$2000</span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <P className="font-medium">
                        Status:{" "}
                        <span className="text-gray-600 font-normal">
                          Pending
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
    </section>
  );
}
