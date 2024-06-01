import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };


  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <button
        onClick={() => router.refresh()}
        className="p-4 hover:bg-gray-700"
      >
        Collaborator
      </button>
      <button
        // onClick={() => navigateTo(`/workspace/${boardName}/profile`)}
        className="p-4 hover:bg-gray-700"
      >
        Profile
      </button>
    </div>
  );
};

export default Sidebar;
