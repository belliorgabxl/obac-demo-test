import React from "react";
import Image from "next/image";
import { NavbarData } from "@/resource/home/navbarData";
import DropMenu from "@/app/components/dropdown/dropdown-menu-1";


export function Navbar() {
  return (
    <header className="flex flex-col w-full top-0 left-0 bg-white shadow-xl fixed z-50">
      {/* Logo and Name */}
      <div className="h-1/2">
        <div className="flex justify-between sm:flex-row gap-6 sm:gap-10 sm:ml-12">
          {/* Logo */}
          <a href="/pages/home" className="flex">
            <Image
            src="/images/obac-logo.png"
            alt="obac-logo"
            width={80}
            height={80}
            className="p-4"
          />
          {/* Name university */}
          <div className="flex flex-col justify-start font-inter font-bold p-2 text-[#2E58A2] ">
            <span className="sm:text-sm ">วิทยาลัยอาชีวศึกษา</span>
            <span className="sm:text-xl ">เอกวิทย์บริหารธุรกิจ</span>
            <span className="sm:text-lg ">
              Ekawit Business Administration Vocational College
            </span>
          </div>
          </a>
          
          <div className="justify-end grid place-items-center px-10 sm:px-2 sm:py-1">
            <a href="/pages/login" className="px-10 py-2  rounded-md bg-blue-900 text-white hover:bg-blue-700 ">ลงชื่อเข้าใช้</a>
          </div>
        </div>
      </div>
      {/* menu bar */}
      <div className=" text-white w-full flex py-1 px-10 justify-between bg-blue-950">
        <DropMenu menuData={NavbarData} />
        <button className="text-lg bg-blue-800 rounded-full border-2 border-white hover:bg-white hover:text-black hover:border-2 hover:border-black px-10 py-2  duration-500 justify-end">สมัครออนไลน์</button>
      </div>
    </header>
  );
}
