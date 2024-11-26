import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function PersonalDetailsForm() {
  return (
    <form className="mt-10 container justify-center lg:w-[1100px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            type="text"
            placeholder="Enter your first name"
            className="bg-transparent "
          />
        </div>
        <div>
          <Label htmlFor="middlename">Middle Name</Label>
          <Input
            id="middlename"
            type="text"
            placeholder="Enter your middle name"
            className="bg-transparent "
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            id="lastname"
            type="text"
            placeholder="Enter your last name"
            className="bg-transparent "
          />
        </div>
      </div>
      <div className="lg:grid-cols-4 grid mt-4">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            className="bg-transparent "
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="mt-4 bg-secondary w-[100px]">Save</Button>
      </div>
    </form>
  );
}
