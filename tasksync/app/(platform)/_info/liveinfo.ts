import { Liveblocks } from "@liveblocks/node";

export const liveClient = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});