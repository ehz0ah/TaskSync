"use client";
import React, { useState, useEffect } from "react";
import { getClient } from "@/app/(platform)/_info/clientInfo";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import { redirect } from "next/navigation";

type SettingsProps = {
  roomId: string;
};

const Settings: React.FC<SettingsProps> = ({ roomId }) => {
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [newCollaborator, setNewCollaborator] = useState("");

  useEffect(() => {
    const fetchCollaborators = async () => {
      try {
        const session = await getClient();
        const roomInfo = await liveClient.getRoom(roomId);
        setCollaborators(Object.keys(roomInfo.usersAccesses));
      } catch (error) {
        console.error("Failed to fetch collaborators", error);
      }
    };

    fetchCollaborators();
  }, [roomId]);

  const addCollaborator = async () => {
    if (newCollaborator.trim() === "") return;

    try {
      await liveClient.updateRoom(roomId, {
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

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Settings</h1>
      <div>
        <h2 className="text-xl mb-2">Collaborators</h2>
        <ul>
          {collaborators.map((email) => (
            <li key={email}>{email}</li>
          ))}
        </ul>
        <div className="mt-4">
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
      <button onClick={redirect(`/workspace/${roomId}`)} className="mt-4 text-blue-500">
        Go Back
      </button>
    </div>
  );
};

export default Settings;
