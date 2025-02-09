import dynamic from "next/dynamic";
import { Suspense } from "react";

const Heros = dynamic(() => import("@/components/main/Heros"), { suspense: true });
const Skills = dynamic(() => import("@/components/main/Skills"), { suspense: true });
const Encryption = dynamic(() => import("@/components/main/Encryption"), { suspense: true });
const Projects = dynamic(() => import("@/components/main/Projects"), { suspense: true });
const Contact = dynamic(() => import("@/components/main/Contact"), { suspense: true });
const Footer = dynamic(() => import("@/components/main/Footer"), { suspense: true });

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Suspense fallback={<div>Chargement de la bannière...</div>}>
          <Heros />
        </Suspense>
        <Suspense fallback={<div>Chargement des compétences...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Chargement du contenu sécurisé...</div>}>
          <Encryption />
        </Suspense>
        <Suspense fallback={<div>Chargement des projets...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Chargement du formulaire de contact...</div>}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div>Chargement du pied de page...</div>}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
