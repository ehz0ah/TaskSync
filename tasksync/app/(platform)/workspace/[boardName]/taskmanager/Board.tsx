import React, { useState } from "react";
import { card } from "./Column";
import { useMutation, useStorage } from "@/liveblocks.config";
import Column from "./Column";
import { LiveList } from "@liveblocks/client";

const Board = () => {
  // const [cards, setCards] = useState([]);
  const cards = useStorage((root) => root.cards);
  const setCards = useMutation(({ storage }, newCards: card[]) => {
    const newList = new LiveList<card>(newCards);
    storage.set("cards", newList);
  }, []);
  return (
    <div className="flex h-full w-full gap-3 p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-500"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

// const DEFAULT_CARDS = [
//   { title: "task1", id: "1", column: "backlog" },
//   { title: "task2", id: "2", column: "todo" },
//   { title: "task3", id: "3", column: "doing" },
//   { title: "task4", id: "4", column: "done" },
//   { title: "task6", id: "6", column: "backlog" },
//   { title: "task7", id: "7", column: "done" },
// ];

export default Board;
