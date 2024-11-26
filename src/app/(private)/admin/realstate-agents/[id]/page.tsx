import React from "react";
import Title from "@/components/dashboard/Title";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, PlusCircle, Search } from "lucide-react";
import AddInstitutionForm from "@/components/admin/AddInstitutionForm";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AgentAddForm from "@/components/admin/realState/AgentAddForm";
import Link from "next/link";

export default function page() {
  return (
    <section className="2xl:container px-4  overflow-hidden">
      <div className="py-4">
        <Title
          title="RealState Agents"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex gap-2 items-center justify-end">
        <div className="  p-1 border rounded-2xl  h-10  flex items-center">
          <Input placeholder="search" className=" bg-transparent border-none" />
          <Search size={20} />
        </div>
      </div>
      <div className=" overflow-hidden  mt-8 ">
        <Table>
          <TableCaption>A list of your recent new requests.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">S.N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Availablity</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4].map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Sunjan Man</TableCell>
                <TableCell>Kathmandu</TableCell>
                <TableCell>Room</TableCell>
                <TableCell>10000</TableCell>
                <TableCell>
                  <span className=" px-3 text-yellow-900 py-1 bg-yellow-300 rounded-2xl">
                    available
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    href={`/admin/realstate-agents/${idx}`}
                    className=" flex items-center gap-4"
                  >
                    <Eye size={16} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
