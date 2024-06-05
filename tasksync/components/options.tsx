import React, { useState, useEffect } from "react";
import { getClient } from "@/app/(platform)/_info/clientInfo";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import Sidebar from "./sidebar";

type SettingsProps = {
  boardName: string;
};

const Settings: React.FC<SettingsProps> = ({ boardName }) => {
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [newCollaborator, setNewCollaborator] = useState("");

  useEffect(() => {
    const fetchCollaborators = async () => {
      try {
        const room = await liveClient.getRoom(boardName); // Correctly calling getRoom with one argument
        if (room) {
          setCollaborators(Object.keys(room.usersAccesses));
        }
      } catch (error) {
        console.error("Failed to fetch collaborators", error);
      }
    };

    fetchCollaborators();
  }, [boardName]);

  const addCollaborator = async () => {
    if (newCollaborator.trim() === "") return;

    try {
      await liveClient.updateRoom(boardName, {
        usersAccesses: {
          [newCollaborator]: ["room:write"],
        },
      });
      setCollaborators([...collaborators, newCollaborator]);
      setNewCollaborator("");
    } catch (error) {
      console.error("Failed to add collaborator", error);
    }
  };

  const removeCollaborator = async (email: string) => {
    try {
      await liveClient.updateRoom(boardName, {
        usersAccesses: {
          [email]: null, // Remove access
        },
      });
      setCollaborators(
        collaborators.filter((collaborator) => collaborator !== email)
      );
    } catch (error) {
      console.error("Failed to remove collaborator", error);
    }
  };

  return (
    <div className="p-4 flex">
      <div className="flex-1">
        <h1 className="text-4xl mb-5 text-white">Settings for {boardName}</h1>
        <div>
          <h2 className="text-2xl mb-3 text-white">Collaborators</h2>
          <ul>
            {collaborators.map((email) => (
              <li key={email} className="text-white flex items-center justify-between">
                {email}
                <button
                  onClick={() => removeCollaborator(email)}
                  className="text-red-500 font-extrabold px-3 rounded-full hover:bg-red-500 hover:text-white"
                >
                  &ndash;
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <input
              type="email"
              value={newCollaborator}
              onChange={(e) => setNewCollaborator(e.target.value)}
              placeholder="Enter collaborator email"
              className="border rounded p-2 mr-2"
            />
            <button
              onClick={addCollaborator}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Collaborator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
