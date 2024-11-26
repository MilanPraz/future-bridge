import { Eye } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
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

export default function NewStudents() {
  return (
    <section className="2xl:container ">
      <div className="mt-8">
        <div className="">
          <Table>
            <TableCaption>A list of your recent new requests.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">S.N</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Sunjan Man</TableCell>
                  <TableCell>sujan123@gmail.com</TableCell>
                  <TableCell>9841488444</TableCell>
                  <TableCell>
                    <span className=" px-3 text-yellow-900 py-1 bg-yellow-300 rounded-2xl">
                      pending
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className=" flex items-center gap-4">
                      <Eye size={16} />
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className=" bg-secondary px-2 py-1 rounded-2xl text-white">
                            verify
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle className="mt-4 mb-2">
                              Are you sure you want to verify this request?
                            </DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will
                              permanently change the status of booking. The
                              property will be booked for the student.
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
      </div>
    </section>
  );
}
