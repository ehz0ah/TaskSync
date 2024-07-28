import Link from "next/link";
import React, { use, useEffect } from "react";

type BoardProps = {
  name: string | null;
  roomId: string;
  onDelete: () => void;
};

// This is a functional component that represents a board in the app.
// It receives a set of props including the name of the board, the room ID, and a function to handle deletion.
export const Board: React.FC<BoardProps> = ({
  name, // The name of the board.
  roomId, // The ID of the room that the board belongs to.
  onDelete, // A function to handle deletion of the board.
}) => {
  // const updateMyPresence = useUpdateMyPresence();

  // useEffect(() => {
  //   updateMyPresence({ roomId });
  // }, );

  return (
    // The board is represented by a div with a relative position.
    // The border and shadow styles are applied to create a visually appealing appearance.
    <div className="relative border border-neutral-800 rounded-lg w-64 h-64 flex flex-col items-center justify-center bg-transparent shadow-2xl">
      {/* This button is used to delete the board. */}
      <button
        onClick={onDelete} // When the button is clicked, the onDelete function is called.
        className="pb-0.5 absolute top-2 right-2 hover:text-black text-slate-200 rounded-full w-6 h-6 flex items-center justify-center"
      >
        &times; {/* The button displays a close icon.*/}
      </button>
      {/* This button is used to navigate to the board settings. */}
      <button
        onClick={(e) => e.stopPropagation()} // When the button is clicked, the event's propagation is stopped.
        className="absolute top-2 left-2 text-slate-200 hover:text-black"
      >
        {/* This Link component is used to navigate to the board settings page. */}
        <Link href={`/workspace/${roomId}/settings`}>
          {/* This svg component displays a settings icon. */}
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
      <button className="text-2xl font-bold mb-4 text-white">
        <Link href={`/workspace/${roomId}/timetree`}>{name}</Link>
      </button>
    </div>
  );
};
