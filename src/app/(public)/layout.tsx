import Navigation from "@/components/navigation/Navigation";
import dynamic from "next/dynamic";
import React, { ReactNode, Suspense } from "react";
const Progressbar = dynamic(() => import("@/components/Progressbar"), {
  ssr: false,
});

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense>
        <Progressbar />
        <Navigation />
        {children}
      </Suspense>
    </>
  );
}
