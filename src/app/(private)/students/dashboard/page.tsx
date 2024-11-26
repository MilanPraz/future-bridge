import { H3, H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  Edit,
  Eye,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  PlusCircle,
  Trash2,
  WalletMinimal,
  BookText,
} from "lucide-react";
import React from "react";
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
import EditProfile from "@/components/studentDashboardForm/EditProfile";
import EditTestResult from "@/components/studentDashboardForm/EditTestResult";
import EditEducation from "@/components/studentDashboardForm/EditEducation";
import AddEducation from "@/components/studentDashboardForm/AddEducation";
import Title from "@/components/dashboard/Title";

export default function page() {
  return (
    <section className="container  ">
      <div className="py-4">
        <Title
          title="My Profile"
          name="Alisha Khatri"
          email="alisha@gmail.com"
          img="/home/person1.jpg"
        />
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
          <img
            src="/home/person1.jpg"
            alt="profile"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover"
          />
          <div>
            <H3 className="text-primary text-center lg:text-left md:text-left">
              Alisha Khatri
            </H3>
            <P className="text-gray-500 mt-2 text-center lg:text-left md:text-left">
              Student
            </P>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-primary" />
                <P className="text-gray-600">alisha@gmail.com</P>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-primary" />
                <P className="text-gray-600">1234567890</P>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-row items-center">
            <H3 className="text-primary">Personal Details</H3>
            <div className="flex space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-transparent p-2">
                    <Edit size={20} className="text-secondary " />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here.
                    </DialogDescription>
                  </DialogHeader>
                  <EditProfile />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-primary" />
                <P className="font-medium">
                  Address:{" "}
                  <span className="text-gray-600 font-normal">
                    Sankhamul, Nepal
                  </span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-primary" />
                <P className="font-medium">
                  Date of Birth:{" "}
                  <span className="text-gray-600 font-normal">
                    12th December, 1928
                  </span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={20} className="text-primary" />
                <P className="font-medium">
                  Nationality:{" "}
                  <span className="text-gray-700 font-normal">Nepali</span>
                </P>
              </div>
            </div>
            <div className="lg:mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <Eye size={20} className="text-primary" />
                <P className="font-medium">
                  Looking For:{" "}
                  <span className="text-gray-600 font-normal">
                    Masters in Computer Science
                  </span>
                </P>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap size={20} className="text-primary" />
                <P className="font-medium">
                  Highest Qualification:{" "}
                  <span className="text-gray-600 font-normal">Bachelors</span>
                </P>
              </div>
            </div>

            <div className=" space-y-4 md:border-l-4 lg:border-l-4 h-32 border-primary pl-4">
              <div className="flex items-center space-x-2">
                <H3 className="text-primary">Test</H3>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-transparent p-2">
                        <PlusCircle size={20} className="text-secondary " />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Test Results</DialogTitle>
                        <DialogDescription>
                          Add your test results here.
                        </DialogDescription>
                      </DialogHeader>
                      <EditTestResult />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <Button className="bg-secondary rounded-3xl">
                  <P>
                    IELTS: <span className="text-white">7.5</span>
                  </P>
                </Button>
                <Button className="bg-secondary rounded-3xl">
                  <P>
                    PTE: <span className="text-white">75</span>
                  </P>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-row items-center">
            <H3 className="text-primary">Education</H3>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-transparent p-2">
                    <PlusCircle size={20} className="text-secondary " />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Education </DialogTitle>
                    <DialogDescription>
                      Add your education details here.
                    </DialogDescription>
                  </DialogHeader>
                  <AddEducation />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <Card className="mt-4 p-4">
                <div className="flex flex-row justify-between items-center">
                  <H4 className="text-primary">
                    Bachelors in Computer Science
                  </H4>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="bg-transparent p-2">
                          <Edit size={20} className="text-secondary" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Education </DialogTitle>
                          <DialogDescription>
                            Edit your education details here.
                          </DialogDescription>
                        </DialogHeader>
                        <EditEducation />
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className=" p-2">
                          <Trash2 size={20} className="text-red-600" />
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Building2 size={20} className="text-primary" />
                      <P className="font-medium">
                        University:{" "}
                        <span className="text-gray-600 font-normal">
                          Kathmandu University
                        </span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <WalletMinimal size={20} className="text-primary" />
                      <P className="font-medium">
                        Faculty:{" "}
                        <span className="text-gray-600 font-normal">
                          Science and Technology
                        </span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookText size={20} className="text-primary" />
                      <P className="font-medium">
                        Level of Education:{" "}
                        <span className="text-gray-600 font-normal">
                          Bachelors
                        </span>
                      </P>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={20} className="text-primary" />
                      <P className="font-medium">
                        Starting Year:{" "}
                        <span className="text-gray-600 font-normal">2019</span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={20} className="text-primary" />
                      <P className="font-medium">
                        Year of graduation:{" "}
                        <span className="text-gray-600 font-normal">2023</span>
                      </P>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap size={20} className="text-primary" />
                      <P className="font-medium">
                        CGPA/Percentage:{" "}
                        <span className="text-gray-600 font-normal">3.5/4</span>
                      </P>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
