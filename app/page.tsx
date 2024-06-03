import Image from "next/image";
import Heros from "@/components/main/Heros";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-[830px] ">
        <Heros/>
      </div>
    </main>
  );
}
