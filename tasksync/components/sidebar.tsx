"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar: React.FC = () => {
  
  const params = useParams();
  const { boardName } = params;
  
  const pathname = usePathname();

  return (
    <div className="flex pt-24 pl-[31.5vh]">
      <div className="flex-col flex items-start">
        <button className="mb-10 text-white hover:text-indigo-400">
          <Link href="/workspace"> Home </Link>
        </button>
        <button className={pathname.startsWith(`/workspace/${boardName}/taskmanager`) ? "mb-10 text-indigo-400" : "mb-10 text-white hover:text-indigo-400"}>
          <Link href={`/workspace/${boardName}/taskmanager`}> Task Manager </Link>
        </button>
        <button className={pathname.startsWith(`/workspace/${boardName}/timetree`) ? "mb-10 text-indigo-400" : "mb-10 text-white hover:text-indigo-400"}>
          <Link href={`/workspace/${boardName}/timetree`} replace> TimeTree </Link>
        </button>
        <button className={pathname.startsWith(`/workspace/${boardName}/settings`) ? "mb-10 text-indigo-400" : "mb-10 text-white hover:text-indigo-400"}>
          <Link href={`/workspace/${boardName}/settings`}> Settings </Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// w-64 h-full bg-gray-800 text-white flex flex-col
