import Link from "next/link";
import React, { useCallback } from "react";

type BoardProps = {
  name: string;
  onDelete: () => void;
};

export const Board: React.FC<BoardProps> = ({ name, onDelete }) => {
  return (
    <div className="relative border rounded-lg w-64 h-64 flex flex-col items-center justify-center bg-white shadow">
      <button
        onClick={onDelete}
        className="pb-0.5 absolute top-2 right-2 hover:text-black hover:border-black border border-slate-200 text-slate-200 rounded-full w-6 h-6 flex items-center justify-center"
      >
        &times;
      </button>
      <button
        // onClick={(e) => e.stopPropagation()}
        className="absolute top-2 left-2 text-gray-500"
      >
        <Link href={"/settings"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
              fill="currentColor"
            />
            <path
              d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z"
              fill="currentColor"
            />
            <path
              d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </button>
      <h2 className="text-2xl font-bold mb-4 text-black">{name}</h2>{" "}
      {/* Add text-black to make text visible */}
      <div>{/* You can add more functionality here for the to-do list */}</div>
    </div>
  );
};
