import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabricejor Portfolio",
  description: "Je vous Présente Mon Portfolio Fabricejor Réalisé avec Next.js 14 ce site web vous présente mon profil , mon travail et tous mes projets entrepris en tant que dévelloppeur Full-stack.Développeur Full Stack passionné par le numérique et les nouvelles technologies, j'ai une solide expérience en développement web et mobile. Toujours à l'affût de nouveaux défis, je cherche sans cesse à perfectionner mes compétences techniques. Mon objectif est de contribuer activement à la réussite de vos projets.",
  keywords:['Next.js', 'React', 'JavaScript','Fabricejor','Fabricejor dev', 'Portofio','Fabricejor portfolio'],
  authors:[{name:'Fabricejor'},{name:'Fabricejor Dev'},{name:'Fabrice jordan Ramos Dev'}],
  creator: 'Jordan Ramos',
  publisher: 'Jordan Ramos',
  alternates: {canonical:'/'},
  openGraph:{
    title:'Mon Portfolio Fabricejor next js',
    type:'profile',
    description:'Ici vous trouverez toutes les informations professionelles me concernants',
    images:[{ url:'https://raw.githubusercontent.com/Fabricejor/Fabricejor-Portfolio-next-js/refs/heads/main/public/apercu.png'}],
    emails:'Fabricejordan2001@gmail.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabricejor - Mon portfolio',
    description:'Ici vous trouverez toutes les informations professionelles me concernants',
    images: ['https://raw.githubusercontent.com/Fabricejor/Fabricejor-Portfolio-next-js/refs/heads/main/public/apercu.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#010607] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
