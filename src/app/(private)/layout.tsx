import SideNav from "@/components/dashboard/SideNav";
import Progressbar from "@/components/Progressbar";
import React, { ReactNode, Suspense } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense>
        <Progressbar />
        <div className=" flex">
          <SideNav />
          <div className=" flex-1 overflow-hidden   lg:mt-0 mt-16">
            {children}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
