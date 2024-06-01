"use client";
import Kanban from "./kanban";

export default function Page() {
  return (
    <div className=" bg-gradient-to-r from-purple-500 from-20% via-cyan-400 via-70% to-emerald-500 to-100% h-full">
      <div className="container justify-center">
        <Kanban />
      </div>
    </div>
  );
}
