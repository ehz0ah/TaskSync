import { Presence, useOthers } from "@/liveblocks.config";
import { shallow } from "@liveblocks/client";
import Image from "next/image";
import { userInfo } from "os";

type AvatarsProps = {
  presenceKey: keyof Presence;
  presenceValue: string;
};
export default function Avatars({ presenceKey, presenceValue }: AvatarsProps) {
  const others = useOthers((users) => {
    return users.filter(
      (user) => user.presence?.[presenceKey] === presenceValue
    );
  }, shallow);
  return (
    <div className="flex gap-1">
      {others.map((user) => (
        <div key = {user.id}>
          <Image src={user.info?.image as string} alt="avater" />
        </div>
      ))}
    </div>
  );
}
