/*
"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface Card {
  id: number;
  name: string;
  image: string;
}

const HorizontalScrollCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const handleAddCard = () => {
    const name = prompt('Enter the card name:');
    if (!name) return;

    const imageFile = document.createElement('input');
    imageFile.type = 'file';
    imageFile.accept = 'image/*';
    imageFile.onchange = () => {
      const file = imageFile.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const newCard = {
            id: nextId,
            name: name,
            image: reader.result as string,
          };
          setCards([...cards, newCard]);
          setNextId(nextId + 1);
        };
        reader.readAsDataURL(file);
      }
    };
    imageFile.click();
  };

  return (
    <div className="flex flex-col bg-transparent m-auto p-auto">
      <h1 className="flex w-full lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Workspaces
      </h1>
      <div className="flex w-screen overflow-x-auto pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 space-x-4">
          {cards.map((card) => (
            <div key={card.id} className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-2 bg-gray-200 text-center font-bold text-lg">{card.name}</div>
                <div className="h-48 flex items-center justify-center p-2">
                  <Image src={card.image} alt={card.name} className="object-contain" width={192} height={192} />
                </div>
              </div>
            </div>
          ))}
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center cursor-pointer"
              onClick={handleAddCard}
            >
              <span className="text-6xl text-gray-400">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
*/

"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Card {
  id: number;
  name: string;
  image: string;
}

const HorizontalScrollCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const handleAddCard = () => {
    const name = prompt("Enter the card name:");
    if (!name) return;

    const imageFile = document.createElement("input");
    imageFile.type = "file";
    imageFile.accept = "image/*";
    imageFile.onchange = () => {
      const file = imageFile.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const newCard = {
            id: nextId,
            name: name,
            image: reader.result as string,
          };
          setCards([...cards, newCard]);
          setNextId(nextId + 1);
        };
        reader.readAsDataURL(file);
      }
    };
    imageFile.click();
  };

  return (
    <div className="flex flex-col bg-transparent m-auto p-auto">
      <h1 className="flex w-full lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Workspaces
      </h1>
      <div className="flex overflow-x-auto pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap space-x-4 px-4">
          {cards.map((card) => (
            <div key={card.id} className="inline-block">
              <div className="w-64 h-64 max-w-xs overflow-scroll rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-2 bg-gray-200 text-center font-bold text-lg">
                  {card.name}
                </div>
                <div className="h-48 flex items-center justify-center p-2">
                  <Image
                    src={card.image}
                    alt={card.name}
                    className="object-contain"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="inline-block">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center cursor-pointer"
              onClick={handleAddCard}
            >
              <span className="text-6xl text-gray-400">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
