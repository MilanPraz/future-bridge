"use client";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

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

export default function CustomTable() {
  return (
    <div>
      {" "}
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
    </div>
  );
}
