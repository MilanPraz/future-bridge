import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function PersonalDetailsForm() {
  return (
    <form className="mt-10  justify-center">
      <div>
        <Label htmlFor="currentpassword">Current Password</Label>
        <Input
          id="currentpassword"
          type="password"
          placeholder="Enter your current password"
          className="max-w-[300px] bg-transparent "
        />
      </div>
      <div className="mt-2">
        <Label htmlFor="newpassword">New Password</Label>
        <Input
          id="newpassword"
          type="password"
          placeholder="Enter your new password"
          className="max-w-[300px] bg-transparent "
        />
      </div>
      <div className="mt-2">
        <Label htmlFor="confirmpassword">Confirm Password</Label>
        <Input
          id="confirmpassword"
          type="password"
          placeholder="Confirm your new password"
          className="max-w-[300px] bg-transparent "
        />
      </div>
      <div className="flex justify-starts">
        <Button className="mt-4 bg-secondary w-[100px]">Save</Button>
      </div>
    </form>
  );
}
