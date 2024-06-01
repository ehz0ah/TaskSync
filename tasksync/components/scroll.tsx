import React from 'react';

export const ScrollCard = () => {
  return (
    <div className="flex flex-col bg-transparent m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        WorkSpaces
      </h1>
      <div className="flex w-screen overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}