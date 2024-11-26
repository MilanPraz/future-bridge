"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const menus = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Service",
    to: "/services",
  },
  {
    title: "Event",
    to: "/events",
  },
  {
    title: "Blogs",
    to: "/blogs",
  },
  {
    title: "Contact Us",
    to: "/contact-us",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  const isHome = pathname === menus[0].to;
  const isService = pathname === menus[1].to;
  const isEvent = pathname === menus[2].to;
  const isBlog = pathname === menus[3].to;

  return (
    <>
      <nav className=" flex justify-between  sticky  top-0  z-50 h-16 bg-white shadow-md backdrop-blur px-4 ">
        <Link href={"/"} className=" flex gap-2 items-center  text-primary">
          <img className=" w-10 h-10 sm:w-12 sm:h-12" src="/nav/logo.png" />
          <div className=" flex flex-col ">
            <span className="  text-sm  md:text-2xl font-bold leading-6 ">
              Future Bridged
            </span>
            <span className=" text-xs sm:text-[14px]   font-bold">
              Educational Consultancy
            </span>
          </div>
        </Link>
        <div className=" flex items-center gap-8 font-semibold ">
          <ul className="  md:flex hidden  items-center  gap-8 ">
            {menus.map((nav, idx: number) => {
              const isActive = nav.to === pathname;
              console.log("index", idx);
              let activeIndex;
              if (isActive) {
                // const
                // setActiveIndex(activeIndex!);
                activeIndex = idx;
                console.log("active ko index", idx);
              }
              //here we check just previous ko to link with current pathname, aru ko false hhunxa active link ko just after wala ko chahi true hunxa
              const isNextItem = idx > 0 && menus[idx - 1].to === pathname;

              console.log("remove bar idx", isNextItem);
              return (
                <li
                  className={cn(
                    "relative flex-shrink-0 transition-all before:content-[''] before:absolute after:content-[''] after:absolute",
                    isActive
                      ? "before:top-0 before:left-0 before:w-full before:h-[1.5px] before:bg-secondary after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary"
                      : isNextItem
                      ? "before:hidden"
                      : "before:top-0 before:-left-4 before:w-[2px] before:h-full before:bg-secondary"
                  )}
                >
                  {nav.to == "/services" ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className=" outline-none border-none "
                        asChild
                      >
                        <button className=" flex items-center gap-1">
                          Services <ChevronDown size={18} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>
                          <DropdownMenuItem asChild>
                            <Link href={"/for-partners"}>For Partners</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={"/for-institutions"}>
                              For Institutions
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              For Students
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem asChild>
                                  <Link href={"/for-students"}>Benefits</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href={"/for-students/class-info"}>
                                    Class Info
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href={"/for-students/universities"}>
                                    Univerisities we offer
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href={"/for-students/courses"}>
                                    Courses
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href={"/for-students/accomodations"}>
                                    Accomodations
                                  </Link>
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={nav.to}>{nav.title}</Link>
                  )}
                </li>
              );
            })}
            {/* <div
              className={cn(
                "h-6 w-[2px] relative bg-green-500 transition-all duration-500",
                isHome ? "  rotate-90 top-0" : ""
              )}
            ></div>
            <li
              className={cn(
                " relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute "
              )}
            >
              <Link href={menus[0].to}>{menus[0].title}</Link>
            </li>
            <div className=" h-6 w-[2px] bg-green-500"></div>

            <li
              className={cn(
                " relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute "
              )}
            >
              <Link href={menus[1].to}>{menus[1].title}</Link>
            </li>
            <div className=" h-6 w-[2px] bg-green-500"></div>

            <li
              className={cn(
                " relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute "
              )}
            >
              <Link href={menus[2].to}>{menus[2].title}</Link>
            </li>
            <div className=" h-6 w-[2px] bg-green-500"></div>

            <li
              className={cn(
                " relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute "
              )}
            >
              <Link href={menus[3].to}>{menus[3].title}</Link>
            </li>
            <div className=" h-6 w-[2px] bg-green-500"></div>

            <li
              className={cn(
                " relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute "
              )}
            >
              <Link href={menus[4].to}>{menus[4].title}</Link>
            </li>
            <div className=" h-6 w-[2px] bg-green-500"></div> */}
          </ul>
          <Link
            className=" bg-secondary text-white  px-4 py-1 rounded-lg"
            href={"/students"}
          >
            Log in
          </Link>
        </div>
      </nav>
    </>
  );
}

{
  /* <li
  className={cn(
    "green-bar relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute ",
    isActive
      ? " before:top-0 before:left-0 before:w-full before:h-[1.5px] before:bg-green-500   after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 transition-all"
      : " before:top-0 before:-rotate-90 before:opacity-0 before:left-0 before:w-full before:h-[1.5px] before:bg-green-500  after:-rotate-90 after:opacity-0  after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 transition-all "
  )}
>
  <Link href={nav.to}>{nav.title}</Link>
</li>; */
}

//   {
//     menus.map((nav, idx: number) => {
//       const isActive = nav.to === pathname;
//       console.log("index", idx);
//       let activeIndex;
//       if (isActive) {
//         // const
//         // setActiveIndex(activeIndex!);
//         activeIndex = idx;
//         console.log("active ko index", idx);
//       }
//       const isNextToActive = isActive && idx < menus.length - 1;

//       console.log("remove bar idx");
//       return (
//         <li
//           className={cn(
//             " relative flex-shrink-0  transition-all before:content-[''] before:absolute after:content-[''] after:absolute ",
//             isActive
//               ? " before:top-0 before:left-0 before:w-full before:h-[1.5px] before:bg-green-500   after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 transition-all"
//               : " before:top-0 before:-left-4 before:w-[2px] before:h-full before:bg-green-500   ",
//             isNextToActive && "  text-red-600 bg-green-300"
//           )}
//         >
//           <Link href={nav.to}>{nav.title}</Link>
//         </li>
//       );
//     });
//   }
