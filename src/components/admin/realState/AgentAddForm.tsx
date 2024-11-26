import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function AgentAddForm() {
  return (
    <form className=" space-y-4">
      <div>
        <Label>Agent's Name</Label>
        <Input placeholder="Enter Institution Name" />
      </div>
      <div className="mt-3">
        <Label> Email</Label>
        <Input placeholder="Enter Institution Office Email" />
      </div>
      <div className="mt-3">
        <Label>Phone</Label>
        <Input placeholder="Enter Institution Office Phone" />
      </div>
      <div className=" flex justify-end">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
