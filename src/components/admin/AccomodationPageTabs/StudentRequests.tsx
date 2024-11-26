import { Eye } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function StudentRequests() {
  return (
    <section className="2xl:container">
      <div className="mt-8">
        <div className="">
          <Table>
            <TableCaption>A list of your recent new requests.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">S.N</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Kathmandu, Nepal</TableCell>
                  <TableCell>NCCS</TableCell>
                  <TableCell>Rs. 100000</TableCell>
                  <TableCell className="text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className=" flex items-center gap-4">
                          <Eye size={16} />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Message from student</DialogTitle>
                        </DialogHeader>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit distinctio nemo debitis consequatur
                            aliquam nobis ipsam ratione placeat corporis, rerum
                            eius quo amet dolores ullam. Blanditiis hic
                            perferendis repellat velit, non ut accusamus at rem
                            consequatur explicabo possimus eum in aut quas ea
                            fugiat natus eaque repellendus inventore ex numquam.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
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
