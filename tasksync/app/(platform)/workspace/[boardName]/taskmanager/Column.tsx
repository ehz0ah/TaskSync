import React, { useState } from "react";
import Card, { DropIndicator } from "./Card";
import { motion } from "framer-motion";
export type card = {
  title: string;
  column: string;
  id: string;
};

interface Prop {
  title: string;
  headingColor: string;
  column: any;
  cards: any;
  setCards: any;
}

const AddCard = ({ column, setCards, cards }: Prop) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);
  function handleSubmit(event: any) {
    event.preventDefault();
    if (!text.trim().length) return;
    const newCard = {
      title: text.trim(),
      id: Math.random().toString(),
      column,
    };
    setCards([...cards, newCard]);
    setAdding(false);
  }
  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(event) => setText(event.target.value)}
            autoFocus
            placeholder="Add New Task"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              {/* <FiPlus /> */}
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add Card</span>
        </motion.button>
      )}
    </>
  );
};

const Column = ({ title, headingColor, column, cards, setCards }: Prop) => {
  const [active, setActive] = useState(false);
  const handleDragStart = (event: any, card: card) => {
    event.dataTransfer.setData("cardId", card.id);
  };
  const filteredCards = cards.filter((card: card) => card.column === column);
  const handleDelete = (inputCard: card) => {
    setCards((cards: card[]) =>
      cards.filter((card: card) => card.id != inputCard.id)
    );
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };
  const highlightIndicator = (e: any) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els?: any) => {
    const indicators = els || getIndicators();

    indicators.forEach((i: any) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (e: any, indicators: Element[]) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest: any, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = (e: any) => {
    setActive(false);
    clearHighlights();
  };

  const handleDragEnd = (e: any) => {
    setActive(false);
    clearHighlights();
    const cardId = e.dataTransfer.getData("cardId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const before = element == undefined ? "-1" : element.dataset.before;
    console.log(before);
    if (before != cardId) {
      let copy = [...cards];
      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };
      copy = copy.filter((c) => c.id != cardId);
      const moveToBack = before === "-1";
      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;
        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((card: card) => {
          return (
            <Card
              key={card.id}
              {...card}
              handleDragStart={handleDragStart}
              handleDelete={handleDelete}
            />
          );
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard
          title={title}
          headingColor={headingColor}
          setCards={setCards}
          column={column}
          cards={cards}
        />
      </div>
    </div>
  );
};

export default Column;
