import { Edit, Eye } from "lucide-react";
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
export default function ApprovedRequest() {
  return (
    <section className="2xl:container">
      <div className="mt-8">
        <div className="  overflow-hidden">
          <Table>
            <TableCaption>A list of your recent new requests.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">S.N</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Property Name</TableHead>
                <TableHead>Deposit Amount</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Jun 1, 2024</TableCell>
                  <TableCell>Sunjan Man</TableCell>
                  <TableCell>Building</TableCell>
                  <TableCell>Rs. 100000</TableCell>
                  <TableCell className="text-center">
                    <div className=" flex items-center gap-4">
                      <Eye size={16} />
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
