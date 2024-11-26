import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function AddInstitutionForm() {
  return (
    <div className="flex flex-col">
      <form>
        <div>
          <Label>Institution Name</Label>
          <Input placeholder="Enter Institution Name" />
        </div>
        <div className="mt-3">
          <Label>Institution Office Email</Label>
          <Input placeholder="Enter Institution Office Email" />
        </div>
        <div className="mt-3">
          <Label>Institution Office Phone</Label>
          <Input placeholder="Enter Institution Office Phone" />
        </div>
        <div className="mt-3">
          <Label>Institution Address</Label>
          <Input placeholder="Enter Institution Address" />
        </div>
        <div className="mt-3">
          <Label>Description</Label>
          <Textarea placeholder="Enter Description" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <Label>No. of Students</Label>
            <Input placeholder="Enter No. of Students" />
          </div>
          <div>
            <Label>Avg. Tuition Fees</Label>
            <Input placeholder="Enter Avg. Tuition Fees" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button className="bg-primary text-white">Add Institution</Button>
        </div>
      </form>
    </div>
  );
}
