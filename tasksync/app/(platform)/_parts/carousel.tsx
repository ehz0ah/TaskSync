"use client"; // getserversession fails because of client component. see if can use server instead
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Board } from "./board";
import { FaPlus, FaSearch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { deleteRoom, makeRoom, callRooms } from "./handlingRooms";
import { RoomProvider } from "@/liveblocks.config";
import { LiveList } from "@liveblocks/client";

type BoardType = {
  id: number;
  name: string;
  roomId: string;
};

/**
 * Renders a carousel component that allows users to add, search, and delete boards.
 *
 * @return The rendered carousel component.
 */
const Carousel = () => {
  // Define a state variable called 'boards' using the useState hook.
  // This state variable will hold an array of objects of type BoardType.
  // The initial value of the array is an empty array.
  const [boards, setBoards] = useState<BoardType[]>([]);

  // Define a state variable called 'newBoardName' using the useState hook.
  // This state variable will hold a string that represents the name of a new board.
  // The initial value of the string is an empty string.
  const [newBoardName, setNewBoardName] = useState("");

  // Define a ref using the useRef hook.
  // This ref will be used to reference the Slider component.
  const sliderRef = useRef<Slider>(null);

  // The useState hook is used to manage state in React.
  // The first argument is the initial state value, which is an empty array in this case.
  // The second argument is a function that updates the state value.
  // The returned value is an array with two elements: the current state value, and a function to update the state value.
  // The returned function is used to update the state value.

  // The useState hook is used to manage state in React.
  // The first argument is the initial state value, which is an empty string in this case.
  // The second argument is a function that updates the state value.
  // The returned value is an array with two elements: the current state value, and a function to update the state value.
  // The returned function is used to update the state value.

  // The useRef hook is used to create a mutable ref object.
  // The initial value of the ref is null.
  // The returned value is an object with a 'current' property.
  // The 'current' property is mutable and can hold any value.

  useEffect(() => {
    // Define an asynchronous function called fetchRooms.
    // This function is responsible for fetching all the rooms from the server.
    const fetchRooms = async () => {
      try {
        // Attempt to call the callRooms function from the handlingRooms module.
        // This function returns a Promise that resolves to an array of rooms.
        const rooms = await callRooms();

        // Map over each room in the array of rooms.
        // For each room, create a new object with the following properties:
        // - id: the index of the room in the array (starting from 0)
        // - name: the workspaceName property of the room's metadata
        // - roomId: the id of the room
        const initialBoards = rooms.map((room: any, index: number) => ({
          id: index, // Assign the index as the id of the board
          name: room.metadata.workspaceName, // Assign the workspaceName property of the room's metadata as the name of the board
          roomId: room.id, // Assign the id of the room as the roomId of the board
        }));

        // Update the state of the boards using the setBoards function.
        // Pass in the initialBoards array as the new state.
        setBoards(initialBoards);
      } catch (error) {
        // If there is an error, log the error to the console.
        console.error("Failed to fetch rooms", error);
      }
    };

    fetchRooms();
  }, []);

  /**
   * Adds a new board to the carousel.
   * The function first checks if a board with the same name already exists.
   * If it does, it displays an alert and returns without adding the board.
   * If the board name is not empty, it optimistically updates the UI by adding the new board.
   * Then, it navigates to the newly added board.
   * After that, it attempts to create a new room in Liveblocks with the given name.
   * If the room creation is successful, it updates the board's roomId.
   * If the room creation fails, it logs the error and optionally reverts the optimistic UI update.
   */
  const addBoard = async () => {
    // Find the index of the board that matches the name
    const boardIndex = boards.findIndex(
      (board) => board.name.toLowerCase() === newBoardName.toLowerCase()
    );

    // If a board with the same name already exists, display an alert and return
    if (boardIndex !== -1) {
      window.alert(
        `Board with name "${newBoardName}" already exists. Please use a different name. Note that the casing of the names are disregarded.`
      );
      return;
    }

    // If the board name is not empty, proceed with adding the board
    if (newBoardName.trim() !== "") {
      // Generate a unique ID for the new board
      const id = boards.length ? boards[boards.length - 1].id + 1 : 0;

      // Optimistically update the UI by adding the new board
      const newBoards = [...boards, { id, name: newBoardName, roomId: "" }];
      setBoards(newBoards);

      // Navigate to the newly added board after a short delay to allow the UI to update
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(newBoards.length - 1);
        }
      }, 0);

      try {
        // Attempt to create a new room in Liveblocks with the given name
        const roomId = await makeRoom(newBoardName);

        // Update the board's roomId
        setBoards((prevBoards) =>
          prevBoards.map((board) =>
            board.id === id ? { ...board, roomId } : board
          )
        );
      } catch (error) {
        console.error("Failed to create room", error);

        // Optionally, revert the optimistic UI update if room creation fails
        setBoards((prevBoards) =>
          prevBoards.filter((board) => board.id !== id)
        );
      }

      // Reset the new board name input
      setNewBoardName("");
    }
  };

  /**
   * Searches for a board with the given name by converting both the board name
   * and the search term to lowercase and comparing them. If a board is found,
   * the carousel slider is navigated to the corresponding slide. If no board is
   * found, a message is displayed indicating that the board was not found.
   */
  const searchBoard = () => {
    // Find the index of the board that matches the search term
    const boardIndex = boards.findIndex(
      (board) => board.name.toLowerCase() === newBoardName.toLowerCase()
    );

    // If a board with the given name is found
    if (boardIndex !== -1) {
      // Navigate to the found board after a short delay to allow the UI to update
      setTimeout(() => {
        if (sliderRef.current) {
          // Use the slickGoTo method to navigate to the slide corresponding to the board index
          sliderRef.current.slickGoTo(boardIndex);
        }
      }, 0);
    } else {
      // If no board with the given name is found, display a message indicating that the board was not found
      window.alert("Board not found");
    }
  };

  /**
   * Deletes a board with the given ID by optimistically updating the UI,
   * deleting the board's associated room from Liveblocks, and reverting the
   * optimistic update if the deletion fails.
   *
   * @param {number} id - The ID of the board to delete.
   */
  const deleteBoard = async (id: number) => {
    // Find the board to delete based on its ID.
    const boardToDelete = boards.find((board) => board.id === id);

    // If a board with the given ID is found, proceed with the deletion.
    if (boardToDelete) {
      // Optimistically update the UI by removing the board from the list of boards.
      setBoards(boards.filter((board) => board.id !== id));

      try {
        // Attempt to delete the board's associated room from Liveblocks.
        await deleteRoom(boardToDelete.roomId);

        // If the deletion is successful, the board is deleted.
      } catch (error) {
        // If the deletion fails, log the error.
        console.error("Failed to delete room", error);

        // Optionally, revert the optimistic update by adding the board back to the list of boards.
        setBoards((prevBoards) => [...prevBoards, boardToDelete]);
      }
    }
  };

  /**
   * Clear all boards by deleting all the rooms from Liveblocks.
   * If any deletion fails, revert the optimistic update.
   */
  const clearBoards = async () => {
    // Keep a copy of the current state of boards.
    const currentBoards = [...boards];

    // Optimistically clear all boards.
    setBoards([]);

    try {
      // Delete all rooms from Liveblocks.
      // Promise.all() ensures that all deletions are executed in parallel.
      await Promise.all(currentBoards.map((board) => deleteRoom(board.roomId)));
    } catch (error) {
      // If any deletion fails, log the error.
      console.error("Failed to clear rooms", error);

      // Optionally, revert the optimistic update by restoring the previous state.
      setBoards(currentBoards);
    }
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
      <div className="w-[130vh]">
        <Slider ref={sliderRef} {...settings}>
          {boards.map((board) => (
            <div key={board.id} className="p-4 flex justify-center">
              <RoomProvider
                id={board.name}
                initialPresence={{ cursor: { x: 0, y: 0 }, message: "" }}
                initialStorage={{ events: new LiveList() , cards: new LiveList() }}
              >
                <Board
                  name={board.name}
                  roomId={board.roomId}
                  onDelete={() => deleteBoard(board.id)}
                />
              </RoomProvider>
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
