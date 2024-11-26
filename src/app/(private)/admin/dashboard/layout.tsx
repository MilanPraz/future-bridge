import Title from "@/components/dashboard/Title";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Title
        title="Admin Dashboard"
        email="alisha@gmail.com"
        name="Alisha Khatri"
        img="/home/person1.jpg"
      />
      <div>{children}</div>
    </div>
  );
}
