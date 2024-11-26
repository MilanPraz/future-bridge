import Title from "@/components/dashboard/Title";
import { H3 } from "@/components/typography";
import { PlusCircle, Search, Edit, Trash2, Trash, Eye } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import AddPropertyForm from "@/components/agents/Property/AddPropertyForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function page() {
  const properties = [
    {
      sn: 1,
      name: "Sunset Villa",
      location: "California, USA",
      roomType: "3BHK",
      availability: "available",
      price: "$500,000",
    },
    {
      sn: 2,
      name: "Ocean Breeze",
      location: "Miami, USA",
      roomType: "2BHK",
      availability: "sold",
      price: "$750,000",
    },
    {
      sn: 3,
      name: "Mountain Retreat",
      location: "Colorado, USA",
      roomType: "4BHK",
      availability: "available",
      price: "$900,000",
    },
    {
      sn: 4,
      name: "City Lights Apartment",
      location: "New York, USA",
      roomType: "1BHK",
      availability: "pending",
      price: "$1,200,000",
    },
  ];

  return (
    <section className="2xl:container px-3 overflow-hidden">
      <div className="py-2">
        <Title
          title="My Listings"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
        <div className="flex flex-col mt-8">
          <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row justify-between ">
            <div className="flex items-center mb-4 lg:mb-0">
              <H3 className=" p-0 m-0">Add Property</H3>

              <Link
                href={"/agents/my-listings/new"}
                className=" self-center cursor-pointer text-secondary ml-2"
              >
                <PlusCircle size={20} />
              </Link>
            </div>

            <div className="flex w-[250px] gap-2 rounded-lg border border-gray-400 px-2 ring-gray-400  lg:mt-0 ">
              <input
                className=" bg-transparent py-2 outline-none focus:outline-none text-sm "
                placeholder="Search..."
              />
              <Search className="text-primary mt-2 ml-10" size={20} />
            </div>
          </div>
          <div className="mt-8">
            <div className="overflow-hidden mt-4">
              <Table>
                <TableCaption>A list of your recent new requests.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">S.N</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Room Type</TableHead>
                    <TableHead>Availablity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-left">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4].map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Sunset Villa</TableCell>
                      <TableCell>Thimi, Bhaktapur</TableCell>
                      <TableCell>2BHK</TableCell>
                      <TableCell>
                        <span className=" py-2 px-3 rounded-2xl  bg-green-200  text-green-900">
                          available
                        </span>
                      </TableCell>
                      <TableCell>$500,000</TableCell>
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
        </div>
      </div>
    </section>
  );
}
