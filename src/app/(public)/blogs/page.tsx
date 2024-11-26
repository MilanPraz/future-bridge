import React from "react";

export default function page() {
  return (
    <div className=" 2xl:container px-4">
      <div className=" flex flex-col gap-6 items-center">
        <h2 className=" text-sm font-medium">The Blog</h2>
        <h1 className=" text-5xl font-medium">Writing from our team</h1>
        <p className=" text-muted-foreground text-sm">
          The latest industry new, interviews, technologies, and resources.
        </p>
      </div>
    </div>
  );
}
