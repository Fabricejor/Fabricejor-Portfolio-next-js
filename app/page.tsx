import Image from "next/image";
import Heros from "@/components/main/Heros";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-[830px] ">
        <Heros/>
        <Skills/>
        <Encryption/>
        <Projects/>
      </div>
    </main>
  );
}
