'use client';

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import Loader from "@/components/3d-box-loader-animation";

const Heros = dynamic(() => import("@/components/main/Heros"), { suspense: true });
const Skills = dynamic(() => import("@/components/main/Skills"), { suspense: true });
const Encryption = dynamic(() => import("@/components/main/Encryption"), { suspense: true });
const Projects = dynamic(() => import("@/components/main/Projects"), { suspense: true });
const Contact = dynamic(() => import("@/components/main/Contact"), { suspense: true });
const Footer = dynamic(() => import("@/components/main/Footer"), { suspense: true });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]">
        <Loader />
      </div>
    );
  }

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Suspense fallback={null}>
          <Heros />
        </Suspense>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <Encryption />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
