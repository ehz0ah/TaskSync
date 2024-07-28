"use client";
import React, { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const params = useParams();
  const { boardName } = params;

  const pathname = usePathname();
  const router = useRouter();
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (shouldReload && pathname.endsWith("/taskmanager")) {
      window.location.reload();
    }
  }, [shouldReload, pathname]);

  const handleTaskManagerClick = () => {
    setShouldReload(true);
    router.replace(`/workspace/${boardName}/taskmanager`);
  };

  return (
    <div className="flex pt-24 pl-[31.5vh]">
      <div className="flex-col flex items-start">
        <button className="mb-10 text-white hover:text-indigo-400">
          <Link href="/workspace"> Home </Link>
        </button>
        <button
          className={
            pathname.startsWith(`/workspace/${boardName}/taskmanager`)
              ? "mb-10 text-indigo-400"
              : "mb-10 text-white hover:text-indigo-400"
          }
          onClick={handleTaskManagerClick}
        >
          Task Manager
        </button>
        <button
          className={
            pathname.startsWith(`/workspace/${boardName}/timetree`)
              ? "mb-10 text-indigo-400"
              : "mb-10 text-white hover:text-indigo-400"
          }
        >
          <Link href={`/workspace/${boardName}/timetree`}> TimeTree </Link>
        </button>
        <button
          className={
            pathname.startsWith(`/workspace/${boardName}/settings`)
              ? "mb-10 text-indigo-400"
              : "mb-10 text-white hover:text-indigo-400"
          }
        >
          <Link href={`/workspace/${boardName}/settings`}> Settings </Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
