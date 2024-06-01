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
