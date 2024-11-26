"use client";
import React from "react";
import Title from "@/components/dashboard/Title";
import {
  ArrowUpIcon,
  Building2,
  ChevronRight,
  Edit,
  Eye,
  GraduationCap,
  HandCoins,
  Handshake,
  Trash2,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const stats = [
  {
    title: "Students",
    icon: <GraduationCap size={40} />,
    quantity: 25000,
    growthRate: 5.8,
  },
  {
    title: "Institutions",
    icon: <Building2 size={40} />,
    quantity: 1200,
    growthRate: 5.8,
  },
  {
    title: "Agents",
    icon: <HandCoins size={40} />,
    quantity: 25000,
    growthRate: 5.8,
  },
  {
    title: "Partners",
    icon: <Handshake size={40} />,
    quantity: 25000,
    growthRate: 5.8,
  },
];

const data = [
  {
    name: "Jan",
    student: 2322,
    agent: 2322,
  },
  {
    name: "Feb",
    student: 634,
    agent: 789,
  },
  {
    name: "Mar",
    student: 1500,
    agent: 1856,
  },
  {
    name: "Apr",
    student: 1500,
    agent: 2846,
  },
  {
    name: "May",
    student: 985,
    agent: 1568,
  },
  {
    name: "Jun",
    student: 1000,
    agent: 3325,
  },
  {
    name: "Jul",
    student: 200,
    agent: 2900,
  },
  {
    name: "Aug",
    student: 1222,
    agent: 788,
  },
  {
    name: "Oct",
    student: 5000,
    agent: 5000,
  },
  {
    name: "Nov",
    student: 2000,
    agent: 1000,
  },
  {
    name: "Dec",
    student: 3452,
    agent: 2000,
  },
];
const recentAgents = [
  {
    pic: "/people/person.jpg",
    name: "Milan Dalal",
    email: "milandalal@gmail.com",
  },
  {
    pic: "/people/person.jpg",
    name: "Milan Dalal",
    email: "milandalal@gmail.com",
  },
  {
    pic: "/people/person.jpg",
    name: "Milan Dalal",
    email: "milandalal@gmail.com",
  },
  {
    pic: "/people/person.jpg",
    name: "Milan Dalal",
    email: "milandalal@gmail.com",
  },
  {
    pic: "/people/person.jpg",
    name: "Milan Dalal",
    email: "milandalal@gmail.com",
  },
  {
    pic: "/people/person.jpg",
    name: "Milan Dalal",
    email: "milandalal@gmail.com",
  },
];

const studentsData = [
  {
    name: "Milan Praz",
    email: "milan@gmail.com",
    phone: "9898989898",
    status: "pending",
  },
  {
    name: "Milan Praz",
    email: "milan@gmail.com",
    phone: "9898989898",
    status: "pending",
  },
  {
    name: "Milan Praz",
    email: "milan@gmail.com",
    phone: "9898989898",
    status: "approved",
  },
  {
    name: "Milan Praz",
    email: "milan@gmail.com",
    phone: "9898989898",
    status: "approved",
  },
  {
    name: "Milan Praz",
    email: "milan@gmail.com",
    phone: "9898989898",
    status: "rejected",
  },
];
export default function page() {
  return (
    <section className="2xl:container px-3 mt-28 lg:mt-0">
      {/* STATISTICS */}
      <div className=" flex flex-wrap gap-10 items-center">
        {stats.map((s, idx) => {
          return (
            <div
              key={idx}
              className=" w-[200px] bg-white  p-4 rounded-xl border"
            >
              <div className=" flex gap-3">
                <div className=" p-2 rounded-xl text-white bg-secondary w-fit">
                  {s.icon}
                </div>
                <h2 className=" text-xl font-medium">{s.title}</h2>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h2 className=" font-medium text-lg">25,000</h2>
                <p className="  flex items-center text-xs gap-1 text-secondary">
                  <ArrowUpIcon size={10} />
                  2.5%
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* STUDENT REPORTS AND AGENTS RECENTS */}
      <section className=" my-10 flex lg:flex-row flex-col  gap-8 py-10">
        {/* STUDENTS REPORTS */}

        <div className=" bg-white flex-1 w-full rounded-lg  drop-shadow-lg p-4 text-xs lg:w-[50%] ">
          <h2 className=" text-lg font-medium text-black mb-4">
            Students Report
          </h2>
          <div className="h-[50vh]  ">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 20,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid stroke="#e8e8e8" strokeDasharray={5} />
                <YAxis axisLine={false} />
                <XAxis axisLine={false} dataKey={"name"} />
                <Tooltip />
                <Area
                  stackId="1"
                  type="monotone"
                  stroke="#4F46E5"
                  fill="#EEF2FF"
                  dataKey="student"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className=" max-w-[350px] drop-shadow-xl h-[60vh]   w-full  rounded-xl space-y-4 p-4 bg-white">
          <h2>Recent Agents</h2>
          <div className=" space-y-4">
            {recentAgents.map((a, idx) => {
              return (
                <div className=" flex gap-4  justify-between items-center">
                  <div className=" flex items-center gap-4">
                    <img
                      src={a.pic}
                      alt="agent"
                      width={400}
                      className=" w-8 h-8 rounded-full object-cover"
                    />

                    <div className=" flex flex-col gap-1">
                      <h2 className=" text-sm">{a.name}</h2>
                      <p className=" text-muted-foreground text-xs">
                        {a.email}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Eye size={16} className=" text-muted-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button className=" text-sm text-muted-foreground flex items-center gap-1">
              See all agents <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
      {/* STUDENTS VERIFY TABLE */}
      {/* <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">S.N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentsData.map((student, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell className="text-right">action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}

      <div className=" rounded-md  mb-20 overflow-auto border-none">
        <table className=" divide-y-2 divide-primary w-full">
          <thead className="bg-transparent">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                SN
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Status
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-gray-600">
            {studentsData.map((student, idx) => (
              <tr key={idx}>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">
                  {idx + 1}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm  text-muted-foreground">
                  {student.name}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">
                  {student.email}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">
                  {student.phone}
                </td>
                <td className="px-6  py-2 whitespace-nowrap text-sm text-muted-foreground">
                  <div
                    className={`p-2 py-1 rounded-full w-[70px] text-center ${
                      student.status === "approved"
                        ? "bg-green-200 text-green-800"
                        : student.status === "rejected"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {student.status}
                  </div>
                </td>

                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600">
                  <div className="flex items-center gap-2 justify-start">
                    <Link
                      href={`my-listings/${idx}/edit`}
                      className=" text-muted-foreground"
                    >
                      <Eye size={16} />
                    </Link>
                    <div>
                      <button className=" text-sm px-2 py-1  bg-secondary text-white rounded-xl">
                        verify
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
