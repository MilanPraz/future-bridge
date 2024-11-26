import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function EditProfile() {
  return (
    <form>
      <div>
        <Label>Address</Label>
        <Input placeholder="Enter youraddress" />
      </div>
      <div className="mt-2">
        <Label>Date of Birth</Label>
        <Input type="date" />
      </div>
      <div className="mt-2">
        <Label>Nationality</Label>
        <Input placeholder="Eg. Nepali" />
      </div>
      <div className="mt-2">
        <Label>Looking For</Label>
        <Input placeholder="Eg. Masters in Computer Science" />
      </div>
      <div className="mt-2">
        <Label>Highest Eduation</Label>
        <Input placeholder="Eg. Bachelors" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" className="bg-secondary">
          Save changes
        </Button>
      </div>
    </form>
  );
}
