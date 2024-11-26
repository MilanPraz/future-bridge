"use client";
import React, { useState } from "react";
import Title from "@/components/dashboard/Title";
import { Search } from "lucide-react";
import NewRequest from "@/components/admin/AccomodationPageTabs/NewRequest";
import ApprovedRequest from "@/components/admin/AccomodationPageTabs/ApprovedRequest";
import StudentRequests from "@/components/admin/AccomodationPageTabs/StudentRequests";

export default function Page() {
  const [activeTab, setActiveTab] = useState("new");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <section className="2xl:container px-4 overflow-hidden">
      <div className="py-4">
        <Title
          title="Accommodations"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between py-4">
        <div className="flex space-x-6">
          <button
            className={`${
              activeTab === "new"
                ? "border-b-4 border-secondary text-secondary"
                : ""
            }`}
            onClick={() => handleTabClick("new")}
          >
            New Requests
          </button>
          <button
            className={`${
              activeTab === "approved"
                ? "border-b-4 border-secondary text-secondary"
                : ""
            }`}
            onClick={() => handleTabClick("approved")}
          >
            Approved Requests
          </button>
          <button
            className={`${
              activeTab === "student"
                ? "border-b-4 border-secondary text-secondary"
                : ""
            }`}
            onClick={() => handleTabClick("student")}
          >
            Student Requests
          </button>
        </div>
        <div className="flex items-center lg:mt-0 mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl outline-primary  bg-transparent px-2 py-2 text-sm w-64"
          />
          <Search size={20} className="absolute ml-[220px]" />
        </div>
      </div>
      <div>
        {activeTab === "new" && (
          <div>
            <NewRequest />
          </div>
        )}
        {activeTab === "approved" && (
          <div>
            <ApprovedRequest />
          </div>
        )}
        {activeTab === "student" && (
          <div>
            <StudentRequests />
          </div>
        )}
      </div>
    </section>
  );
}
