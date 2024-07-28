import React from "react";
import Settings from "@/components/options";
import Sidebar from "@/components/sidebar";
import { getClient } from "@/app/(platform)/_info/clientInfo";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import ShowError from "@/app/(platform)/_parts/error";

/**
 * SettingsPage is a functional component that renders the settings page for a specific board.
 * It fetches the board name from the URL parameters and renders a Sidebar component along with the Settings component.
 */
export default async function SettingsPage({
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
    <div className="flex">
      <Sidebar />
      <div className="pt-24 pl-[20vw]">
        <Settings boardName={boardName} />
      </div>
    </div>
  );
}

// If the board name is not available or is not a string, display a loading message.
// if (!boardName || typeof boardName !== "string") {
//   return <div>Loading...</div>;
// }

//export default SettingsPage;

// {/* Render the Sidebar component. */}
// <Sidebar />
// {/* Render the Settings component, passing the boardName as a prop. */}
// <div className="ml-5">
//   <Settings boardName={boardName} />
// </div>
