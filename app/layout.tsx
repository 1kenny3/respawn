import type { Metadata } from "next";
export const metadata:Metadata={title:"RESPAWN — игровая валюта",description:"Голда WoW, гемы Brawl Stars и другие игровые товары"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><body>{children}</body></html>;}
