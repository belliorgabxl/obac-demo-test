"use client";

import {
  StudentSidebarProps,
  ProfileData,
} from "@/resource/students/studentSidebarData";
import { CiUser } from "react-icons/ci";
import React from "react";

export function StudentSidebar({
  menuItems,
  profileData,
  ...props
}: StudentSidebarProps & { profileData: ProfileData }) {
  return (
    <header className="flex w-screen top-0 bg-background shrink-0 items-center gap-2 border-b px-4 py-2">
      {/* sidebar with info and menu */}
      <SidebarMenu
        name={profileData.name}
        href={profileData.href}
        id="6410450958"
        menuItems={menuItems}
      />

      {/* Navbar */}
      <div className="flex justify-center items-center w-full gap-6 h-full">
        <img
          src="/images/obac_navbar_logo.png"
          alt="obac-logo"
          style={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        />
        <span className="text-center text- py-1">
          วิทยาลัยอาชีวศึกษาเอกวิทย์บริหารธุรกิจ
        </span>
      </div>
    </header>
  );
}

export function SidebarMenu({
  name,
  id,
  href,
  menuItems,
}: {
  name: string;
  id: string;
  href: string;
  menuItems: StudentSidebarProps["menuItems"];
}) {
  const truncatedTitle = name.length > 25 ? `${name.slice(0, 22)}...` : name;

  return (
    <div className="border-r-2 pt-4 bg-blue-900 fixed top-0 left-0 flex flex-col h-screen p-1 overflow-hidden transition-all duration-500 ease-in-out group hover:w-64 w-16 z-40">
      <div className="flex h-[48px] ">
        <a href={href} className="flex   items-center justify-start">
          <button className="flex items-start ml-2 mt-2">
            <CiUser
              style={{ width: "2.5rem", height: "2.5rem" }}
              className="text-white"
            />
          </button>
        </a>
        <div className="flex flex-col gap-2 pt-2 ml-6 mr-4">
          <span className="text-white text-sm font-semibold block opacity-0 group-hover:opacity-100 group-hover:duration-500 group-hover:delay-500 duration-0">
            {truncatedTitle}
          </span>
          <span className="text-white text-xs font-semibold block opacity-0 group-hover:opacity-100 group-hover:duration-500 group-hover:delay-500 duration-0">
            {id}
          </span>
        </div>
      </div>

      <div className="border-t-2 pt-2 mt-6">
        {menuItems.map((item, index) => (
          <a key={index} href={item.href}>
            <button className="h-12 mx-2 mt-2 flex items-center w-11/12 px-2 group hover:bg-blue-700 hover:rounded-lg group-hover:duration-500 group-hover:delay-500 duration-0">
              <div className="flex items-center gap-4 w-full">
                <div className="w-10 h-10 flex items-center text-white justify-center">
                  {item.icon}
                </div>
                <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 group-hover:duration-500 group-hover:delay-500 duration-0">
                  {item.title}
                </span>
              </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
