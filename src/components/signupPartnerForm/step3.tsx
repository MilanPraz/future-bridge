"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { H4, P } from "../typography";
import { Label } from "../ui/label";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col  justify-center mx-auto">
      <div className="bg-white border border-black rounded-xl p-3 sm:p-6 mt-10 bg-opacity-95 shadow-lg">
        <form>
          <div className="flex justify-between items-center mb-6">
            <H4>Register As a Partner</H4>
            <Link href="/signup">
              <X size={25} className="cursor-pointer" />
            </Link>
          </div>

          <P className="font-medium ">Service Offer To The student</P>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 1</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 2</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 3</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 4</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 5</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 6</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 7</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 8</Label>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Label className="text-sm ml-2">Option 9</Label>
            </div>
          </div>
          <div className="mt-6 flex  items-center justify-between sm:justify-end gap-4">
            <Button
              type="button"
              onClick={() => router.push("?step=2")}
              className=" px-10 bg-[#688968] hover:bg-[#688968]"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => router.push("?step=4")}
              className=" px-10 bg-secondary hover:bg-secondary"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
