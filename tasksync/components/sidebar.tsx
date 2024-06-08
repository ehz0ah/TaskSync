"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const params = useParams();
  const { boardName } = params;

  return (
    <div className="flex pt-24 pl-[31.5vh]">
      <div className="flex-col flex items-start">
        <button className="mb-10 text-white hover:text-indigo-400">
          <Link href="/workspace"> Home </Link>
        </button>
        <button className="mb-10 text-white hover:text-indigo-400">
          <Link href={`/workspace/${boardName}/taskmanager`}> Task Manager </Link>
        </button>
        <button className="mb-10 text-white hover:text-indigo-400">
          <Link href={`/workspace/${boardName}/timetree`}> TimeTree </Link>
        </button>
        <button className="mb-10 text-white hover:text-indigo-400">
          <Link href={`/workspace/${boardName}/settings`}> Settings </Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// w-64 h-full bg-gray-800 text-white flex flex-col
