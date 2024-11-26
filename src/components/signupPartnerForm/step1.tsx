"use client";
import React from "react";
import { H4 } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <section>
      <div className="bg-white border border-black rounded-xl p-3 sm:p-6 mt-10  bg-opacity-95 shadow-lg">
        <form>
          <div className="flex justify-between items-center">
            <H4>Register As a Partner</H4>
            <Link href="/signup">
              <X size={25} className="cursor-pointer" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 mt-8">
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Organization Name</Label>
              <Input type="text" placeholder="Enter your organization name" />
            </div>
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">
                Registration No.(If Applicable)
              </Label>
              <Input type="text" placeholder="Enter registration number" />
            </div>
            <div className="flex flex-col flex-1">
              <Label className="text-sm mb-2">Business Type</Label>
              <Input type="email" placeholder="Enter your business type" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 mt-4">
            <div className="flex flex-col mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Year of Establishment</Label>
              <Input type="date" />
            </div>
            <div className="flex flex-col mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Country</Label>

              <Input type="text" placeholder="Eg: Nepal" />
            </div>
            <div className="flex flex-col">
              <Label className="text-sm mb-2">City</Label>
              <Input type="text" placeholder="Eg: Kathmandu" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 mt-4">
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Street</Label>
              <Input type="text" placeholder="Eg: Ganesh Marga" />
            </div>
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Address</Label>
              <Input type="text" placeholder="Eg: New Baneshwor" />
            </div>
            <div className="flex flex-col flex-1">
              <Label className="text-sm mb-2">Postal/Zip Code</Label>
              <Input type="text" placeholder="Eg: 44600" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 mt-4">
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Phone</Label>
              <Input type="text" placeholder="Eg: 9860XXXXXX" />
            </div>
            <div className="flex flex-col flex-1 mb-4 lg:mb-0">
              <Label className="text-sm mb-2">Primary Website(If Any)</Label>
              <Input type="text" placeholder="Eg: www.example.com" />
            </div>
            <div className="flex flex-col flex-1">
              <Label className="text-sm mb-2">Secondary Website(If Any)</Label>

              <Input type="text" placeholder="Eg: www.example.com" />
            </div>
          </div>
          <div className="mt-4 flex  items-center justify-end gap-4">
            <Button
              type="button"
              onClick={() => router.push("?step=2")}
              className=" px-10 bg-secondary hover:bg-secondary"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
