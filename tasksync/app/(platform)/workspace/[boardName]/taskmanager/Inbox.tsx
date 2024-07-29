"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  InboxNotification,
  InboxNotificationList,
} from "@liveblocks/react-comments";
import {
  LiveblocksProvider,
  useInboxNotifications,
  useMarkAllInboxNotificationsAsRead,
  useUnreadInboxNotificationsCount,
} from "@/liveblocks.config";
import { Liveblocks } from "@liveblocks/node";
import { liveClient } from "@/app/(platform)/_info/liveinfo";
import { getClient } from "@/app/(platform)/_info/clientInfo";

interface Prop {
  userId: string;
}

function InboxPopoverUnreadCount() {
  const { count } = useUnreadInboxNotificationsCount();
  let checkCount: boolean;
  if (count != undefined) {
    checkCount = count > 0;
  } else {
    checkCount = false;
  }
  return (
    checkCount && (
      <div className="flex-auto border bg-red-500 rounded-full absolute translate-x-3 -translate-y-1 text-white text-xs text-center font-medium min-w-4 w-auto h-4">
        {count}
      </div>
    )
  );
}

const Inbox = ({ userId }: Prop) => {
  const { inboxNotifications } = useInboxNotifications();
  const markAllInboxNotificationsAsRead = useMarkAllInboxNotificationsAsRead();
  const API_KEY =
    "sk_dev_n4spm2teIiOeOZQDwsXCtEHIJ_jx0er0KI7BbS0L_BCDjM6-WYcX-iuezHq_UU5q";
  const BASE_URI = `https://api.liveblocks.io/v2/users/${userId}/inbox-notifications`;
  const deleteInbox = fetch(BASE_URI, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return (
    <LiveblocksProvider>
      <Popover className="h-10 flex flex-col">
        <>
          <PopoverButton onClick={markAllInboxNotificationsAsRead}>
            <InboxPopoverUnreadCount />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 fill-white hover:fill-blue-400 flex-none"
            >
              <path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 8.97 8.97 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.47 7.47 0 0 1 1.546-3.186ZM16.942 2.272a.75.75 0 0 0-1.157.955 7.47 7.47 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 8.971 8.971 0 0 0-1.856-3.825Z" />
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Zm0 14.5a2 2 0 0 1-1.95-1.557 33.54 33.54 0 0 0 3.9 0A2 2 0 0 1 10 16.5Z"
                clipRule="evenodd"
              />
            </svg>
          </PopoverButton>
        </>
        <PopoverPanel
          anchor="bottom"
          className="rounded border border-neutral-700 bg-neutral-800 p-3 w-1/4 h-3/4 text-white flex flex-col"
        >
          <>
            <h1 className="font-medium flex-none">Notifications</h1>
            <button onClick={(e) => deleteInbox}>Delete All</button>
            <InboxNotificationList>
              {inboxNotifications?.map((inboxNotification) => (
                <InboxNotification
                  key={inboxNotification.id}
                  inboxNotification={inboxNotification}
                  className="flex-auto"
                />
              ))}
            </InboxNotificationList>
          </>
        </PopoverPanel>
      </Popover>
    </LiveblocksProvider>
  );
};

export default Inbox;
