"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Board } from "./board";
import { FaPlus, FaSearch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type BoardType = {
  id: number;
  name: string;
};

const Carousel: React.FC = () => {
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [newBoardName, setNewBoardName] = useState("");
  const sliderRef = useRef<Slider>(null);

  const addBoard = () => {
    if (newBoardName.trim() !== "") {
      const id = boards.length ? boards[boards.length - 1].id + 1 : 0;
      const newBoards = [...boards, { id, name: newBoardName }];
      setBoards(newBoards);
      setNewBoardName("");

      // Navigate to the newly added board
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(newBoards.length - 1);
        }
      }, 0);
    }
  };

  const searchBoard = () => {
    const boardIndex = boards.findIndex(
      (board) => board.name.toLowerCase() === newBoardName.toLowerCase()
    );
    if (boardIndex !== -1) {
      // Navigate to the found board
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(boardIndex);
        }
      }, 0);
    } else {
      window.alert("Board not found");
    }
  };

  const deleteBoard = (id: number) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  const clearBoards = () => {
    setBoards([]); // This will set the boards array to an empty array, effectively clearing all boards
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
    arrows: boards.length > 3, // Show arrows only if there are more than three board
    adaptiveHeight: true,
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center mb-4 pr-8">
        <input
          type="text"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="Enter board name"
          className="border rounded p-2 mr-2 text-black" // Add text-black to make text visible
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addBoard();
            }
          }}
        />
        {/*}
        <button
          onClick={addBoard}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Board
        </button>
        */}
        <button
          onClick={addBoard}
          className="bg-blue-500 text-white p-2 rounded flex items-center justify-center"
        >
          <FaPlus />
        </button>
        <button
          onClick={searchBoard}
          className="bg-gray-500 text-white p-2 rounded flex items-center justify-center ml-2"
        >
          <FaSearch />
        </button>
      </div>
      <div className="w-[100vh]">
        <Slider ref={sliderRef} {...settings}>
          {boards.map((board) => (
            <div key={board.id} className="p-4 flex justify-center">
              <Board name={board.name} onDelete={() => deleteBoard(board.id)} />
            </div>
          ))}
        </Slider>
      </div>
      {boards.length > 2 && (
        <button
          onClick={clearBoards}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mr-7 mt-8"
        >
          Clear All Boards
        </button>
      )}
    </div>
  );
};

export default Carousel;
