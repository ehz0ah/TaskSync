import { getClient } from "@/app/(platform)/_info/clientInfo";
import Kanban from "./kanban";
import Sidebar from "@/components/sidebar";
import { RoomProvider, Card } from "@/liveblocks.config";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import ShowError from "@/app/(platform)/_parts/error";
import { LiveList } from "@liveblocks/client";

export default async function Page({
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
      <RoomProvider
        id={boardName}
        initialPresence={{ cursor: { x: 0, y: 0 }, message: "" }}
        initialStorage={{ cards: new LiveList() }}
      >
        <div className="p-24">
          <Kanban />
        </div>
      </RoomProvider>
    </div>
  );
}
