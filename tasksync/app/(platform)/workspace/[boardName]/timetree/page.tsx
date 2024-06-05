import TimeTree from "../../../_parts/calendar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="p-24">
      <TimeTree />
      </div>
    </div>
  );
}

// { params }: { params: { roomId: string } }
