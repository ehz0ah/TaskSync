import React from "react";
import { card } from "./Column";
import { motion } from "framer-motion";
import { useState } from "react";
import PopupMenu from "./PopupMenu";

interface Prop {
  title: string;
  id: string;
  column: string;
  handleDragStart: (event: any, card: card) => void;
  handleDelete: (card: card) => void;
  handleEdit: (card: card) => void;
}

interface Prop2 {
  beforeId: string;
  column: string;
}

const Card = ({
  title,
  id,
  column,
  handleDragStart,
  handleDelete,
  handleEdit,
}: Prop) => {
  const [text, setText] = useState(title);
  const [edit, setEdit] = useState(false);
  const handleSubmit = () => {
    handleEdit({ title: text, column: column, id: id });
    setEdit(false);
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      {!edit ? (
        <motion.div
          layout
          layoutId={id}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, { title, id, column })}
          className="flex cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
        >
          <p
            className="flex-none w-11/12 text-ellipsis overflow-hidden text-sm text-neutral-100"
            onDoubleClick={() => setEdit(true)}
          >
            {title}
          </p>
          <div className="flex-auto flex-col w-1/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 15 55 25"
              className="flex-none fill-slate-200 hover:fill-slate-500"
              onClick={() =>
                handleDelete({ title: title, id: id, column: column })
              }
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
            <PopupMenu cardId={id} />
          </div>
        </motion.div>
      ) : (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(event) => setText(event.target.value)}
            autoFocus
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline"
          >
            {text}
          </textarea>
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setEdit(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Edit</span>
            </button>
          </div>
        </motion.form>
      )}
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

const closeButton = () => {
  return;
};

export default Card;
