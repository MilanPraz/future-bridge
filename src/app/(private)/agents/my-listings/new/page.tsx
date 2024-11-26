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
import { H2 } from "@/components/typography";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const {
    register,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className=" 2xl:container px-4  py-4">
      <div
        onClick={() => router.back()}
        className=" cursor-pointer flex text-primary gap-2 mb-4 items-center"
      >
        <MoveLeft size={16} />
        back
      </div>
      <H2 className=" mb-8">Add Property</H2>
      <div className="flex w-full h-full max-w-5xl  rounded-md   ">
        <form className=" flex flex-col gap-4  w-full">
          <div>
            <Label htmlFor="propertyName">Property Name</Label>
            <Input
              className=" bg-transparent w-full"
              type="text"
              id="propertyNameme"
              placeholder="Enter property name"
            />
          </div>
          <div className="">
            <Label htmlFor="propertyDescription">Property Description</Label>

            <RichTextEditor
              modules={["heading"]}
              value={watch("description")}
              setValue={setValue}
              trigger={trigger}
              name="description"
            />
          </div>
          <div className="">
            <Label htmlFor="propertyType">Property Type</Label>
            <Input
              type="text"
              id="propertyType"
              className=" bg-transparent"
              placeholder="Enter property type"
            />
          </div>

          <div className=" grid lg:grid-cols-3 lg:gap-4 grid-cols-1 lg:space-y-0 space-y-3">
            <div>
              <Label htmlFor="province">Province</Label>
              <Input
                className=" bg-transparent"
                type="text"
                id="province"
                placeholder="Enter province"
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                className=" bg-transparent"
                type="text"
                id="city"
                placeholder="Enter city"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                className=" bg-transparent"
                type="text"
                id="address"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 lg:gap-4 grid-cols-1 space-y-3 lg:space-y-0">
            <div>
              <Label htmlFor="minimumDeposit">Minimum Deposit</Label>
              <Input
                className=" bg-transparent"
                type="text"
                id="minimumDeposit"
                placeholder="Enter minimum deposit"
              />
            </div>

            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                className=" bg-transparent"
                type="text"
                id="price"
                placeholder="Enter price /per month"
              />
            </div>
          </div>
          <div className="">
            <Label htmlFor="availability">Availability</Label>
            <Select>
              <SelectTrigger className=" bg-transparent">
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

          <div className="">
            <Label htmlFor="roomType">Room Type</Label>
            <Input
              className=" bg-transparent"
              type="text"
              id="roomType"
              placeholder="Eg: 2BHK"
            />
          </div>
          <div className="">
            <Label htmlFor="video">Youtube Video URL</Label>
            <Input
              className=" bg-transparent"
              type="text"
              id="video"
              placeholder="Enter Youtube Video URL"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="w-[200px] bg-secondary">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
