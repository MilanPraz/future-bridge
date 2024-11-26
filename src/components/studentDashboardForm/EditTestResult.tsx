import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function EditTestResult() {
  return (
    <form>
      <div>
        <Label>IELTS</Label>
        <Input type="text" placeholder="Eg. 7" />
      </div>
      <div className="mt-2">
        <Label>PTE</Label>
        <Input type="text" placeholder="Eg. 79" />
      </div>
      <div className="mt-2">
        <Label>TOEFL</Label>
        <Input type="text" placeholder=" Eg. 100" />
      </div>
      <div className="mt-2">
        <Label>GRE</Label>
        <Input type="text" placeholder="Eg. 320" />
      </div>
      <div className="mt-2">
        <Label>GMAT</Label>
        <Input type="text" placeholder=" Eg. 700" />
      </div>
      <div className="mt-2">
        <Label>SAT</Label>
        <Input type="text" placeholder="Eg. 1500" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" className="bg-secondary">
          Save
        </Button>
      </div>
    </form>
  );
}
