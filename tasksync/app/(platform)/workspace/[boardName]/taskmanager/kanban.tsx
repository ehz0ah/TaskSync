"use client";
import Board from "./Board";
import React, { PointerEventHandler } from "react";
import { useMyPresence, useOthers } from "@/liveblocks.config";
import Image from "next/image";

function Kanban() {
  const others = useOthers();
  const userCount = others.length;
  const [myPresence, updateMyPresence] = useMyPresence();
  const handlePointerMove = (e: any) => {
    const cursor = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) };
    updateMyPresence({ cursor });
  };
  const handlePointerLeave = () => {
    updateMyPresence({ cursor: undefined });
  };
  return (
    <div className="h-full w-full text-neutral-50">
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <Board />
        {others
          .filter((other) => other.presence.cursor !== null)
          .map(({ connectionId, presence }) => (
            <div
              style={{ width: "100vw", height: "100vh" }}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <div
                key={connectionId}
                style={{
                  position: "absolute",
                  top: presence.cursor.y ? presence.cursor.y : 0,
                  left: presence.cursor.x ? presence.cursor.x : 0,
                  transition: "transform 0.1s linear",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/cursor2.svg"
                  alt="cursor"
                  width={"25"}
                  height={"25"}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Kanban;
