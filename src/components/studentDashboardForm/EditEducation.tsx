import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export default function EditEducation() {
  return (
    <form>
      <div>
        <Label>Course Name</Label>
        <Input placeholder="Eg. BCA" />
      </div>
      <div className="mt-2">
        <Label>University</Label>
        <Input placeholder="Eg. TU" />
      </div>
      <div className="mt-2">
        <Label>Faculty</Label>
        <Input placeholder="Eg. Science" />
      </div>
      <div className="mt-2">
        <Label>Starting Year</Label>
        <Input type="date" />
      </div>
      <div className="mt-2">
        <Label>Graduation Year</Label>
        <Input type="date" />
      </div>
      <div className="mt-2">
        <Label>Specification</Label>
        <Input placeholder="Eg. Marketing" />
      </div>
      <div className="mt-2 flex items-center">
        <Checkbox id="currently-studying">
          <Check size="18" />
        </Checkbox>
        <Label htmlFor="currently-studying" className="ml-2">
          Currently studying
        </Label>
      </div>
      <div className="mt-2">
        <div className="flex flex-row gap-4">
          <div>
            <Label>GPA/Percentage</Label>
            <Input placeholder="Eg. 3.5" />
          </div>
          <div>
            <Label>Out of</Label>
            <Input placeholder="Eg. 4.0" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" className="bg-secondary">
          Save
        </Button>
      </div>
    </form>
  );
}
