import { ThreadMetadata, useThreads } from "@/liveblocks.config";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Composer, Thread } from "@liveblocks/react-comments";
import "@liveblocks/react-comments/styles.css";
import { ThreadData } from "@liveblocks/client";

interface Prop {
  cardId: string;
}

const CommentThread = ({ cardId }: Prop) => {
  const threads = useThreads();
  const thread = threads.threads?.find(
    (thread) => thread.metadata.cardId === cardId
  );
  return (
    <>
      {thread ? (
        <>
          <Thread<ThreadMetadata> key={thread.id} thread={thread} />
        </>
      ) : (
        <Composer<ThreadMetadata>
          metadata={{ resolved: false, cardId: cardId }}
        />
      )}
    </>
  );
};

const PopupMenu = ({ cardId }: Prop) => {
  return (
    <Popover className="relative flex-none">
      <PopoverButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 15"
          strokeWidth={1.5}
          stroke="currentColor"
          width="20px"
          height="20px"
          className="hover:fill-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="rounded border border-neutral-700 bg-neutral-800 p-3 w-1/2 text-white"
      >
        <CommentThread cardId={cardId} />
      </PopoverPanel>
    </Popover>
  );
};

export default PopupMenu;
