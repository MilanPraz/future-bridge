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
      <div className="bg-white border border-black rounded-xl p-3 sm:p-6 mt-10 bg-opacity-95 shadow-lg">
        <form>
          <div className="flex justify-between items-center">
            <H4>Register As a Partner</H4>
            <Link href="/signup">
              <X size={25} className="cursor-pointer" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 mt-8">
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Name of Owner</Label>
              <Input type="text" placeholder="Eg: Alisha Khatri" />
            </div>
            <div className="flex flex-col flex-1 mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Phone</Label>
              <Input type="text" placeholder="Eg: 9860XXXXXX" />
            </div>
            <div className="flex flex-col flex-1">
              <Label className="text-sm mb-2">Email</Label>
              <Input type="email" placeholder="Eg: alisha@gmail.com" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 mt-4">
            <div className="flex flex-col mb-4 lg:mb-2">
              <Label className="text-sm mb-2">City</Label>
              <Input type="text" placeholder="Eg: Kathmandu" />
            </div>
            <div className="flex flex-col mb-4 lg:mb-2">
              <Label className="text-sm mb-2">Linkedin</Label>

              <Input type="text" placeholder="Eg: www.linkedin.com/alisha" />
            </div>
          </div>
          <div className="mt-4 flex  items-center justify-between sm:justify-end gap-4">
            <Button
              type="button"
              onClick={() => router.push("?step=1")}
              className=" px-10 bg-[#688968] hover:bg-[#688968]"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => router.push("?step=3")}
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
