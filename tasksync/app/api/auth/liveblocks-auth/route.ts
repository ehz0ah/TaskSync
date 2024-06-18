
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import uniqid from "uniqid";
import { liveClient } from "@/app/(platform)/_info/liveinfo";


export async function POST(request: Request) {
  // Get the current user from your database
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return new Response("Unauthorized", { status: 401});
  }

  const user = session.user;

  // const personId = uniqid.time();

  // Identify the user and return the result
  const { status, body } = await liveClient.identifyUser(
    {
      userId: user.email as string,
      groupIds: [],
    },
    {
      userInfo: {
        name: user.name || '',
        email: user.email,
        image: user.image,
      },
    }
  );

  return new Response(body, { status });
}


/*
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { liveClient } from "@/app/(platform)/_info/liveinfo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(401).send("Unauthorized");
  }

  const user = session.user;
  const { status, body } = await liveClient.identifyUser(
    {
      userId: user.email as string,
      groupIds: [],
    },
    {
      userInfo: {
        name: user.name || '',
        email: user.email,
        image: user.image,
      },
    }
  );

  res.status(status).send(body);
}
*/

/*
import { authOptions } from "@/lib/authOptions";
import { Liveblocks } from "@liveblocks/node";
import { getServerSession } from "next-auth";
import uniqid from "uniqid";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET || '',
});

export async function POST(request: Request) {
  

  // Get the current user from your database
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const personId = uniqid.time();

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(personId, {
    userInfo: {
      name: session.user?.name as string,
      email: session.user?.email as string,
      image: session.user?.image as string,
    },
  });

  return new Response(body, { status });
}
*/