/*
import { getClient } from "@/app/(platform)/_info/clientInfo";
import TimeTree from "../../../_parts/calendar";
import Sidebar from "@/components/sidebar";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import ShowError from "@/app/(platform)/_parts/error";
import { RoomProvider } from "@/liveblocks.config";

export default async function Home({
  params,
}: {
  params: { boardName: string };
}) {
  const { boardName } = params;
  const session = await getClient();
  const userEmail = session?.user?.email as string;
  let boardInfo;
  try {
    boardInfo = await liveClient.getRoom(boardName);
  } catch (error) {
    return <ShowError message="This workspace does not exist" />;
  }
  const usersAccess = boardInfo.usersAccesses?.[userEmail];
  const hasAccess = usersAccess && [...usersAccess].includes("room:write");

  if (!hasAccess) {
    return (
      <ShowError message="You do not have permission to access this workspace." />
    );
  }

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="p-24">
        <TimeTree id = {boardName} />
      </div>
    </div>
  );
}
*/
// { params }: { params: { roomId: string } }

import { getClient } from "@/app/(platform)/_info/clientInfo";
import TimeTree from "../../../_parts/calendar";
import Sidebar from "@/components/sidebar";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import ShowError from "@/app/(platform)/_parts/error";
import { RoomProvider } from "@/liveblocks.config";
import { LiveList } from "@liveblocks/client";

export default async function CalendarPage({
  params,
}: {
  params: { boardName: string };
}) {
  const { boardName } = params;
  const session = await getClient();
  const userEmail = session?.user?.email as string;
  let boardInfo;
  try {
    boardInfo = await liveClient.getRoom(boardName);
  } catch (error) {
    return <ShowError message="This workspace does not exist" />;
  }
  const usersAccess = boardInfo.usersAccesses?.[userEmail];
  const hasAccess = usersAccess && [...usersAccess].includes("room:write");

  if (!hasAccess) {
    return (
      <ShowError message="You do not have permission to access this workspace." />
    );
  }

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="p-24">
        <RoomProvider
          id={boardName}
          initialPresence={{ cursor: { x: 0, y: 0 }, message: "" }}
          initialStorage={{ events: new LiveList([]), cards: new LiveList([]) }}
        >
          <TimeTree id={boardName} />
        </RoomProvider>
      </div>
    </div>
  );
}
