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
import { Edit, Eye, PlusCircle, Search, Trash2 } from "lucide-react";
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
          title="All Blogs"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className=" flex items-center gap-1">
          <h2 className=" text-lg font-medium">Add Blog</h2>
          <Link href={"/admin/blogs/new"}>
            <PlusCircle className=" cursor-pointer text-primary" size={20} />
          </Link>
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
              <TableHead>Title</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4].map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>World Cup 2024</TableCell>
                <TableCell>Jun 12, 2023</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Technology</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center space-x-2">
                    <span className="bg-transparent border rounded-lg  h-8 w-8 flex items-center justify-center hover:bg-green-100 cursor-pointer">
                      <Eye size={20} className="text-secondary" />
                    </span>
                    <Link href={`/admin/blogs/${idx}/edit`}>
                      <span className="bg-transparent border rounded-lg  h-8 w-8 flex items-center justify-center hover:bg-purple-100 cursor-pointer">
                        <Edit size={20} className="text-primary" />
                      </span>
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <span className="bg-transparent border rounded-lg  h-8 w-8 flex items-center justify-center hover:bg-red-100 cursor-pointer">
                          <Trash2 size={20} className="text-red-600" />
                        </span>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="mt-4 mb-2">
                            Are you sure you want to verify this request?
                          </DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            change the status of booking. The property will be
                            booked for the student.
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <Button type="submit">Verify</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
