"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RichTextEditor from "@/components/common/RichTextEditor";

import { useForm } from "react-hook-form";

export default function AddPropertyForm() {
  const {
    register,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex w-full h-full rounded-md  overflow-y-auto p-4">
      <form>
        <div>
          <Label htmlFor="propertyName">Property Name</Label>
          <Input
            type="text"
            id="propertyNameme"
            placeholder="Enter property name"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="propertyDescription">Property Description</Label>
          {/* <Textarea
            id="propertyDescription"
            placeholder="Enter property description"
          /> */}
          <RichTextEditor
            value={watch("description")}
            setValue={setValue}
            trigger={trigger}
            name="description"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="propertyType">Property Type</Label>
          <Input
            type="text"
            id="propertyType"
            placeholder="Enter property type"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="Features">Features</Label>
          <Textarea id="Features" placeholder="Write down Features" />
        </div>
        <div className="mt-3 grid lg:grid-cols-3 lg:gap-4 grid-cols-1 lg:space-y-0 space-y-3">
          <div>
            <Label htmlFor="province">Province</Label>
            <Input type="text" id="province" placeholder="Enter province" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input type="text" id="city" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" placeholder="Enter Address" />
          </div>
        </div>
        <div className="mt-3 grid lg:grid-cols-2 lg:gap-4 grid-cols-1 space-y-3 lg:space-y-0">
          <div>
            <Label htmlFor="minimumDeposit">Minimum Deposit</Label>
            <Input
              type="text"
              id="minimumDeposit"
              placeholder="Enter minimum deposit"
            />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              id="price"
              placeholder="Enter price /per month"
            />
          </div>
        </div>
        <div className="mt-3">
          <Label htmlFor="availability">Availability</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Availability</SelectLabel>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-3">
          <Label htmlFor="roomType">Room Type</Label>
          <Input type="text" id="roomType" placeholder="Eg: 2BHK" />
        </div>
        <div className="mt-3">
          <Label htmlFor="video">Youtube Video URL</Label>
          <Input type="text" id="video" placeholder="Enter Youtube Video URL" />
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="w-[200px] bg-secondary">Submit</Button>
        </div>
      </form>
    </div>
  );
}
