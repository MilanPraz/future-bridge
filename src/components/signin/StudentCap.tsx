import React from "react";
import Lottie from "lottie-react";
import StudentCap from "@/components/lottie/register/student1.json";

export default function StudentCapComponent() {
  if (!document) return null;
  return (
    <div>
      <Lottie animationData={StudentCap} />
    </div>
  );
}
