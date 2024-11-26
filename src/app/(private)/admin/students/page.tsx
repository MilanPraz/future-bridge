"use client";
import React, { useState } from "react";
import Title from "@/components/dashboard/Title";
import { Search } from "lucide-react";
import NewStudents from "@/components/admin/StudentsPageTabs/NewStudents";
import OldSucceedStudents from "@/components/admin/StudentsPageTabs/OldSucceedStudents";
import OldFailedStudents from "@/components/admin/StudentsPageTabs/OldFailedStudents";

export default function Page() {
  const [activeTab, setActiveTab] = useState("new-students");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <section className="container overflow-hidden">
      <div className="py-4">
        <Title
          title="Students"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between py-4">
        <div className="flex space-x-6">
          <button
            className={`${
              activeTab === "new-students"
                ? "border-b-4 border-secondary text-secondary"
                : ""
            }`}
            onClick={() => handleTabClick("new-students")}
          >
            New Students
          </button>
          <button
            className={`${
              activeTab === "old-succeed-students"
                ? "border-b-4 border-secondary text-secondary"
                : ""
            }`}
            onClick={() => handleTabClick("old-succeed-students")}
          >
            Old Succeed Students
          </button>
          <button
            className={`${
              activeTab === "old-failed-students"
                ? "border-b-4 border-secondary text-secondary"
                : ""
            }`}
            onClick={() => handleTabClick("old-failed-students")}
          >
            Old Failed Students
          </button>
        </div>
        <div className="flex items-center lg:mt-0 mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl outline-primary bg-transparent  px-2 py-2 text-sm w-64"
          />
          <Search size={20} className="absolute ml-[220px]" />
        </div>
      </div>
      <div>
        {activeTab === "new-students" && (
          <div>
            <NewStudents />
          </div>
        )}
        {activeTab === "old-succeed-students" && (
          <div>
            <OldSucceedStudents />
          </div>
        )}
        {activeTab === "old-failed-students" && (
          <div>
            <OldFailedStudents />
          </div>
        )}
      </div>
    </section>
  );
}
