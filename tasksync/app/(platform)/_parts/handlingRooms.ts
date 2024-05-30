"use server";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import uniqid from "uniqid";
import { liveClient } from "../_info/liveinfo";
import { getClient } from "../_info/clientInfo";


/**
 * This function creates a new room in Liveblocks with the given name.
 * It first gets the server session using NextAuth.js. It then extracts the user's email from the session.
 * The email is used to create a new room in Liveblocks with the given name. The room is given default
 * accesses and users accesses. The default accesses are an empty array and the users accesses is an object
 * that maps the user's email to an array of permissions. The metadata is also added to the room and specifies
 * the room's name and workspace name.
 * 
 * @param {string} name - The name of the room to be created.
 * @returns {Promise<string>} - A promise that resolves to the room's ID.
 */
export async function makeRoom(name: string): Promise<string> {
  // Get the Liveblocks client and the server session.
  const liveblocks = liveClient;
  const session = await getServerSession(authOptions);
  
  // Extract the user's email from the session.
  const email = session?.user?.email as string;
  
  // The room's ID is the same as the name.
  const roomId = name
  // const roomId = uniqid.time();
  
  // If the user's email exists, create the room in Liveblocks.
  if (email) {
    await liveblocks.createRoom(name, {
      // No default accesses for this room.
      defaultAccesses: [],
      // The user's email is the only one with write access to the room.
      usersAccesses: {
        [email]: ["room:write"],
      },
      // The metadata specifies the room's name and workspace name.
      metadata: {
        roomName: roomId,
        workspaceName: name,
      },
    });
  }
  // Resolve the promise with the room's ID.
  return roomId;
}


/**
 * This function deletes a room from Liveblocks.
 * 
 * @param {string} workspaceName - The name of the workspace to be deleted.
 *                                Note that this is the same as the room's ID.
 * @returns {Promise<void>} - A promise that resolves when the room is successfully deleted.
 */
export async function deleteRoom(workspaceName: string) {
  // Get the Liveblocks client.
  const liveblocks = liveClient;
  
  // Use the Liveblocks client to delete the room with the given workspace name.
  // The Liveblocks client will send a request to the server to delete the room.
  // If the deletion is successful, the room will be removed from the server.
  await liveblocks.deleteRoom(workspaceName);
}


/**
 * This function calls the Liveblocks server to get all the rooms associated with the current user.
 * The function first gets the server session using NextAuth.js. It then extracts the user's email from the session.
 * The email is used to request all the rooms associated with the user from the Liveblocks server.
 * The Liveblocks client sends a request to the server to get all the rooms associated with the user.
 * The server responds with an array of room objects, each containing information about the room.
 * The function returns the array of room objects.
 *
 * @returns {Promise<any[]>} - A promise that resolves to an array of room objects.
 */
export async function callRooms () {    
  // Get the Liveblocks client and the server session.
  const session = await getClient();
  
  // Extract the user's email from the session.
  const email = session?.user?.email as string;
  
  // Request all the rooms associated with the user from the Liveblocks server.
  // The Liveblocks client sends a request to the server to get all the rooms associated with the user.
  // The server responds with an array of room objects, each containing information about the room.
  const {data:rooms} = await liveClient.getRooms({userId: email});
  
  // Return the array of room objects.
  return rooms;
}
