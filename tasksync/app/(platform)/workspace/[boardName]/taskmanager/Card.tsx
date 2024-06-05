import React from "react";
import { card } from "./Column";
import { motion } from "framer-motion";

interface Prop {
  title: string;
  id: string;
  column: string;
  handleDragStart: (event: any, card: card) => void;
  handleDelete: (card: card) => void;
}

interface Prop2 {
  beforeId: string;
  column: string;
}

const Card = ({ title, id, column, handleDragStart, handleDelete }: Prop) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="flex cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="flex-none w-11/12 text-sm text-neutral-100">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 15 50 50"
          className="flex-auto w-1/12 fill-cyan-800 hover:fill-cyan-300"
          onClick={() => handleDelete({ title: title, id: id, column: column })}
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </motion.div>
    </>
  );
};

export const DropIndicator = ({ beforeId, column }: Prop2) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

export default Card;
