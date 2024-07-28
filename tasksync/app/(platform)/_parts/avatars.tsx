import { Presence, useOthers } from "@/liveblocks.config";
import { shallow } from "@liveblocks/client";
import Image from "next/image";

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
        <div key={user.id}>
          <Image src={user.info?.avatar as string} alt="avater" />
        </div>
      ))}
    </div>
  );
}
