/*
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

type SpeedDialProps = {
    name: string
};

const SpeedDial: React.FC<SpeedDialProps> = ({ name }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-white flex items-center justify-center focus:outline-none"
      >
        {name}
      </button>

      {open && (
        <div className="absolute top-0 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out">
          <button className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center">
            <Image src="/logo2.svg" alt="logo" width={30} height={30} />
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center">
          <Image src="/logo2.svg" alt="logo" width={30} height={30} />
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center">
          <Image src="/logo2.svg" alt="logo" width={30} height={30} />
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center">
          <Image src="/logo2.svg" alt="logo" width={30} height={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeedDial;
*/

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

type SpeedDialProps = {
    name: string
};

const SpeedDial: React.FC<SpeedDialProps> = ({ name }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-white flex items-center justify-center focus:outline-none"
      >
        {name}
      </button>

      {open && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <button className="absolute w-12 h-12 rounded-full bg-transparent text-white flex items-center justify-center transform -translate-y-16">
              <Image src="/logo2.svg" alt="logo" width={30} height={30} />
            </button>
            <button className="absolute w-12 h-12 rounded-full bg-transparent text-white flex items-center justify-center transform translate-y-16">
              <Image src="/logo2.svg" alt="logo" width={30} height={30} />
            </button>
            <button className="absolute w-12 h-12 rounded-full bg-transparent text-white flex items-center justify-center transform -translate-x-16">
              <Image src="/logo2.svg" alt="logo" width={30} height={30} />
            </button>
            <button className="absolute w-12 h-12 rounded-full bg-transparent text-white flex items-center justify-center transform translate-x-16">
              <Image src="/logo2.svg" alt="logo" width={30} height={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedDial;

// work in progress ! NOT USABLE !
