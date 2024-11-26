import { H3 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function page() {
  return (
    <section
      className="min-h-screen   flex justify-center  items-center  relative z-1  sm:p-4"
      style={{
        background: `url(/signin/loginBg.jpg) no-repeat center/cover`,
      }}
    >
      <div className="flex flex-col   mx-auto   p-2 sm:p-4 max-w-sm w-full">
        <div className="bg-white border border-black rounded-xl p-3 sm:p-6 mt-10 bg-opacity-80 shadow-lg">
          <H3 className="text-center ">Welcome Back</H3>

          <form>
            <div className="grid  mt-8">
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Email</Label>
                <Input type="text" placeholder="Enter your first name" />
              </div>
              <div className="flex flex-col flex-1 mb-4 lg:mb-2">
                <Label className="text-sm mb-2">Password</Label>
                <Input type="text" placeholder="Enter your last name" />
              </div>
              <div>
                <p className="cursor-pointer text-primary text-sm font-semibold">
                  Forgot Password?
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button className="px-6 py-3 font-bold w-full max-w-xs">
                Login
              </Button>
            </div>
            <div className=" text-sm font-medium flex justify-center items-center gap-1 text-center mx-auto py-8 ">
              <p className="  capitalize">Don't have an account?</p>
              <span className=" cursor-pointer text-primary">Sign Up!!</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
