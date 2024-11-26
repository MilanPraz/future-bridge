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
      <div className="flex gap-2 items-center justify-between">
        <div className=" flex items-center gap-1">
          <h2 className=" text-lg font-medium">Add Agent</h2>
          <Dialog>
            <DialogTrigger className="" asChild>
              <PlusCircle className=" cursor-pointer text-primary" size={20} />
            </DialogTrigger>
            <DialogContent className="lg:w-[800px] w-[400px]  rounded">
              <DialogHeader>
                <DialogTitle>Add RealState Agent </DialogTitle>
                <DialogDescription>
                  Add your property details here.
                </DialogDescription>
              </DialogHeader>
              <AgentAddForm />
            </DialogContent>
          </Dialog>
        </div>
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
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>No. of properties</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4].map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Sunjan Man</TableCell>
                <TableCell>sujan123@gmail.com</TableCell>
                <TableCell>9841488444</TableCell>
                <TableCell>1</TableCell>
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
