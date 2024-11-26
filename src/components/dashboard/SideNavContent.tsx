"use client";
import { cn } from "@/lib/utils";
import {
  Book,
  Building2,
  CircleUser,
  FileText,
  GraduationCap,
  HandCoins,
  Handshake,
  Home,
  HomeIcon,
  LayoutDashboard,
  MessageSquareDot,
  ScrollText,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const adminMenus = [
  {
    title: "Dashboard",
    to: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Institutions",
    to: "/admin/institutions",
    icon: <Building2 />,
  },
  {
    title: "Accomodations",
    to: "/admin/accomodations",
    icon: <HomeIcon />,
  },
  {
    title: "Students",
    to: "/admin/students",
    icon: <GraduationCap />,
  },
  {
    title: "Partners",
    to: "/admin/partners",
    icon: <Handshake />,
  },
  {
    title: "Real State Agents",
    to: "/admin/realstate-agents",
    icon: <HandCoins />,
  },
  {
    title: "Blogs",
    to: "/admin/blogs",
    icon: <MessageSquareDot />,
  },
  {
    title: "Settings",
    to: "/admin/settings",
    icon: <Settings />,
  },
];

const agentMenus = [
  {
    title: "Dashboard",
    to: "/agents/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Dashboard",
    to: "/agents/my-listings",
    icon: <HomeIcon />,
  },
  {
    title: "Dashboard",
    to: "/agents/settings",
    icon: <Settings />,
  },
];
const studentMenus = [
  {
    title: "Dashboard",
    to: "/students/dashboard",
    icon: <User />,
  },
  {
    title: "Dashboard",
    to: "/students/my-applications",
    icon: <FileText />,
  },
  {
    title: "Dashboard",
    to: "/students/my-documents",
    icon: <ScrollText />,
  },
  {
    title: "Dashboard",
    to: "/students/my-accomodation",
    icon: <Home />,
  },
  {
    title: "Dashboard",
    to: "/students/settings",
    icon: <Settings />,
  },
];

export default function SideNavContent() {
  const pathname = usePathname();
  const isStudent = pathname.startsWith("/students");
  const isAgent = pathname.startsWith("/agents");
  const isAdmin = pathname.startsWith("/admin");

  const menus = isStudent
    ? studentMenus
    : isAgent
    ? agentMenus
    : isAdmin
    ? adminMenus
    : null;
  return (
    <div>
      {" "}
      <section className="w-16 h-screen flex flex-col items-center justify-between gap-8 py-2 text-white bg-primary">
        <div className=" space-y-8 gap-8 w-full">
          <div className=" self-center flex  justify-center">
            <Link href={"/"}>
              <img src="/footer/whiteLogo.svg" alt="logo" width={40} />
            </Link>
          </div>

          <ul className="  flex flex-col gap-6  w-full">
            {menus &&
              menus.map((m, idx: number) => {
                const isActive = pathname.includes(m.to);
                return (
                  <li
                    className={cn(
                      " flex items-center justify-center  bg-transparent transition-all duration-300 py-2 rounded-s-full",
                      isActive ? "bg-secondary" : ""
                    )}
                    key={idx}
                  >
                    <Link href={m.to}>{m.icon}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <button>
          <img width={25} src="/sidenav/back.png" />
        </button>
      </section>
    </div>
  );
}
