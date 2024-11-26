"use client";
import { H4, P } from "../typography";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="bg-white border border-black rounded-xl p-3 sm:p-6 mt-10 bg-opacity-95 shadow-lg">
        <form>
          <div className="flex justify-between items-center mb-6">
            <H4>Register As a Partner</H4>
            <Link href="/signup">
              <X size={25} className="cursor-pointer" />
            </Link>
          </div>

          <P className="font-medium mb-6">References</P>

          <div className="flex justify-center mx-auto mt-4">
            <div className="flex items-center  w-full text-center  justify-center h-32 border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100">
              <span>Add Reference</span>
              <Plus className="mr-2" />
            </div>
          </div>
          <div className="mt-4 flex  items-center justify-between sm:justify-end gap-4">
            <Button
              type="button"
              onClick={() => router.push("?step=3")}
              className=" px-10 bg-[#688968] hover:bg-[#688968]"
            >
              Back
            </Button>
            <Button
              type="button"
              // onClick={() => router.push("?step=3")}
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
