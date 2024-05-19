"use client";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Board } from '../boards/board';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type BoardType = {
  id: number;
  name: string;
};

const Carousel: React.FC = () => {
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [newBoardName, setNewBoardName] = useState('');
  const sliderRef = useRef<Slider>(null);

  const addBoard = () => {
    if (newBoardName.trim() !== '') {
      const id = boards.length ? boards[boards.length - 1].id + 1 : 0;
      const newBoards = [...boards, { id, name: newBoardName }];
      setBoards(newBoards);
      setNewBoardName('');

      // Navigate to the newly added board
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(newBoards.length - 1);
        }
      }, 0);
    }
  };

  const deleteBoard = (id: number) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
    arrows: boards.length > 1, // Show arrows only if there are more than one board
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
        />
        <button onClick={addBoard} className="bg-blue-500 text-white p-2 rounded">
          Add Board
        </button>
      </div>
      <div className="w-80">
        <Slider ref={sliderRef} {...settings}>
          {boards.map((board) => (
            <div key={board.id} className="p-4 flex justify-center">
              <Board name={board.name} onDelete={() => deleteBoard(board.id)} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
