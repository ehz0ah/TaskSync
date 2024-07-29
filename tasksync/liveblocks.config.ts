/*
import { createClient, LiveList, LiveObject } from "@liveblocks/client";
import { createRoomContext, createLiveblocksContext } from "@liveblocks/react";

const client = createClient({
  // publicApiKey: "pk_dev_C4lVteMIitcKi3l4wsssiuC16HJzd8yhLCY9cv5O6WrEWZjyQSx3EaxNTWp0ct9f",
  authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
  async resolveUsers({ userIds }) {
    // Used only for Comments and Notifications. Return a list of user information
    // retrieved from `userIds`. This info is used in comments, mentions etc.

    // const usersData = await __fetchUsersFromDB__(userIds);
    //
    // return usersData.map((userData) => ({
    //   name: userData.name,
    //   avatar: userData.avatar.src,
    // }));

    return [];
  },
  async resolveMentionSuggestions({ text }) {
    // Used only for Comments. Return a list of userIds that match `text`.
    // These userIds are used to create a mention list when typing in the
    // composer.
    //
    // For example when you type "@jo", `text` will be `"jo"`, and
    // you should to return an array with John and Joanna's userIds:
    // ["john@example.com", "joanna@example.com"]

    // const users = await getUsers({ search: text });
    // return users.map((user) => user.id);

    return [];
  },
  async resolveRoomsInfo({ roomIds }) {
    // Used only for Comments and Notifications. Return a list of room information
    // retrieved from `roomIds`.

    // const roomsData = await __fetchRoomsFromDB__(roomIds);
    //
    // return roomsData.map((roomData) => ({
    //   name: roomData.name,
    //   url: roomData.url,
    // }));

    return [];
  },
});

// Presence represents the properties that exist on every user in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

type Event = {
  title: string
  start: string
  end?: string
  allDay: boolean
  id: number
}

// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
  events : LiveList<LiveObject<Event>>
};

// Optionally, UserMeta represents static/readonly metadata on each user, as
// provided by your own custom auth back end (if used). Useful for data that
// will not change during a session, like a user's name or avatar.
type UserMeta = {
  // id?: string,  // Accessible through `user.id`
  // info?: Json,  // Accessible through `user.info`
  info: { name: string; email: string; image: string };
  id: string;
};

// Optionally, the type of custom events broadcast and listened to in this
// room. Use a union for multiple events. Must be JSON-serializable.
type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

// Optionally, when using Comments, ThreadMetadata represents metadata on
// each thread. Can only contain booleans, strings, and numbers.
export type ThreadMetadata = {
  // resolved: boolean;
  // quote: string;
  // time: number;
};

// Room-level hooks, use inside `RoomProvider`
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
    useThreadSubscription,
    useMarkThreadAsRead,
    useRoomNotificationSettings,
    useUpdateRoomNotificationSettings,

    // These hooks can be exported from either context
    // useUser,
    // useRoomInfo
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);

// Project-level hooks, use inside `LiveblocksProvider`
export const {
  suspense: {
    LiveblocksProvider,
    useMarkInboxNotificationAsRead,
    useMarkAllInboxNotificationsAsRead,
    useInboxNotifications,
    useUnreadInboxNotificationsCount,

    // These hooks can be exported from either context
    useUser,
    useRoomInfo,
  },
} = createLiveblocksContext<UserMeta, ThreadMetadata>(client);
*/

/*
import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  // publicApiKey: "",
  authEndpoint: "/api/liveblocks-auth",
  // throttle: 100,
});


type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};


type Storage = {
  // animals: LiveList<string>,
  // ...
};



export const {
  RoomProvider,
  useMyPresence,
  useStorage,
  useMutation,
  
} = createRoomContext<
  Presence,
  Storage
  
>(client);
*/

"use client";
import { createClient, LiveList } from "@liveblocks/client";
import { createLiveblocksContext, createRoomContext } from "@liveblocks/react";
import {UserData} from "app/userRoute/route"
import { use, useEffect, useState } from "react";
import { liveClient } from "./app/(platform)/_info/liveinfo";
import { write } from "fs";
import { RoomInfo } from "@liveblocks/node";
import { format } from "path";



const client = createClient({
  authEndpoint: "/api/auth/liveblocks-auth",
  throttle: 100,
  resolveUsers: async ({userIds}) =>  {
    try {
      const response = await fetch('/userRoute', { method: 'GET'});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const {usersData} = await response.json();
      const usersDataArray: UserData[] = Array.isArray(usersData) ? usersData : Object.values<UserData>(usersData);
      const formattedUsers: {name: string, avatar: string}[] = [];
      for (let index = 0; index < userIds.length; index++) {
        const checker = usersDataArray.find((userData) => userData.email === userIds[index]);
        if (checker) {
          formattedUsers.push({name: checker.name, avatar: checker.image})
        }
      }
      return formattedUsers;
    } catch (error) {
      console.error("Error fetching or processing users:", error);
      throw error; // Optionally rethrow the error for higher level handling
    }
    // return userIds.map((userId) => ({
    //   name: userId
    // }))
  },
  resolveRoomsInfo: async ({roomIds}) => {
    return roomIds.map((documentData) => ({
      name: documentData,
    }))
  },

  resolveMentionSuggestions: async ({text, roomId}) => {

    let boardInfo: RoomInfo;
    try {
      boardInfo = await liveClient.getRoom(roomId)
    } catch (error) {
      console.error("Error fetching room info", error)
      throw error;
    }
    const usersInRoom = boardInfo.usersAccesses
    const userArray: string[] = []
    Object.entries(usersInRoom).forEach(([user, permissions]) => {
      if (permissions.length === 1 && permissions[0] === "room:write") {
        userArray.push(user);
      }})
        if (!text) {
          return userArray
        }
         else {
          return userArray.filter((user) => user.includes(text));
        }
}

  });


export type Presence = {
  cursor: { x: number; y: number };
  message: string;
};

export type ThreadMetadata = {
  resolved: boolean
  cardId: string
}


type Event = {
  title: string;
  start: string;
  end?: string;
  allDay: boolean;
  id: number;
};

export type Card = {
  title: string;
  column: string;
  id: string;
}


type UserMeta = {
  id: string;
  info: { name: string; avatar: string };
}


type Storage = {
  events?: LiveList<Event>;
  cards?: LiveList<Card>
};

export const { RoomProvider, useMyPresence, useOthers, useStorage, useUpdateMyPresence, useMutation, useThreads, useCreateThread } =
  createRoomContext<Presence, Storage, UserMeta, never, ThreadMetadata>(client);

  export const {LiveblocksProvider, useInboxNotifications, useMarkAllInboxNotificationsAsRead, useUnreadInboxNotificationsCount} = createLiveblocksContext(client);
// C:\Users\haozh\OneDrive\Documents\NUS\TaskSync\tasksync\app\api\auth\liveblocks-auth\route.ts
// publicApiKey: "pk_dev_C4lVteMIitcKi3l4wsssiuC16HJzd8yhLCY9cv5O6WrEWZjyQSx3EaxNTWp0ct9f",