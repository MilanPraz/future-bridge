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
  HomeIcon,
  LayoutDashboard,
  MessageSquareDot,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SideNavContent from "./SideNavContent";

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
    to: "/agents/dashboard",
    icon: <User />,
  },
  {
    title: "Dashboard",
    to: "/admin/my-applications",
    icon: <LayoutDashboard />,
  },
  {
    title: "Dashboard",
    to: "/admin/my-documents",
    icon: <LayoutDashboard />,
  },
  {
    title: "Dashboard",
    to: "/admin/my-accomodation",
    icon: <LayoutDashboard />,
  },
  {
    title: "Dashboard",
    to: "/admin/settings",
    icon: <LayoutDashboard />,
  },
];

export default function SideNav() {
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
    <div className=" hidden lg:block left-0 pb-10 sticky z-50 top-0 h-screen">
      <SideNavContent />
    </div>
  );
}
