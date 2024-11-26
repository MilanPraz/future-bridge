import React from "react";
import { H2, H3, H4, P } from "@/components/typography";
import { cn } from "@/lib/utils";
import MobSideNav from "./MobSideNav";

type Props = {
  title: string;
  name: string;
  email: string;
  img: string;
  className?: string;
};

export default function Title({ title, name, email, img, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-row py-3 px-3  shadow-md lg:shadow-none   top-0 left-0 right-0   z-50 lg:bg-transparent pr-4 justify-between lg:static fixed  bg-white w-full",
        className
      )}
    >
      <div className=" flex items-center">
        <MobSideNav />
        <H2 className=" text-primary">{title}</H2>
      </div>

      <div className="flex flex-row lg:items-center md:space-x-4 md:mt-0">
        <div>
          <P className="lg:block md:block  hidden font-medium">{name}</P>
          <P className="lg:block md:block hidden text-gray-500 text-sm">
            {email}
          </P>
        </div>
        <img
          src={img}
          alt="profile"
          className="lg:w-16 lg:h-16 w-12 h-12 rounded-full object-cover ml-2"
        />
      </div>
    </div>
  );
}
