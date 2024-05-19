import { metadata } from "@/app/layout";
import { authOptions } from "@/lib/authOptions";
import { Liveblocks } from "@liveblocks/node";
import { getServerSession } from "next-auth";
import uniqid from "uniqid";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_83QKuNgPK1CFYfmxpqAcifB1xM1diATIqlh4llS4H1IU4W3zQofjwNPGKsi3l-bE",
});

export async function POST(request: Request) {
  // Get the current user from your database
  const session = await getServerSession(authOptions);
  console.log(session);
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
