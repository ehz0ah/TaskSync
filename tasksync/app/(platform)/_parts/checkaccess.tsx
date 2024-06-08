import { getClient } from "@/app/(platform)/_info/clientInfo";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import ShowError from "@/app/(platform)/_parts/error";

export default async function CheckAccess({boardName}: {boardName: string}) {
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
}

// work in progress ! NOT USABLE !
