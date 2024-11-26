import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import SideNavContent from "./SideNavContent";

export default function MobSideNav() {
  return (
    <Sheet>
      <SheetTrigger className="" asChild>
        <button
          className=" inline px-2 lg:hidden
        "
        >
          <MenuIcon size={30} strokeWidth={2} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className=" bg-[#42056b] w-fit flex   overflow-hidden"
      >
        <SideNavContent />
      </SheetContent>
    </Sheet>
  );
}
