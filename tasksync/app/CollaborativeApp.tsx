"use client";

import { useOthers, useSelf } from "../liveblocks.config";

export function CollaborativeApp() {
  const others = useOthers();
  const { name, email, image } = useSelf((me) => me.info)
  console.log(name)
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}