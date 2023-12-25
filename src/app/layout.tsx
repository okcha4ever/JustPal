import MySessionProvider from "@/providers/MySessionProvider";
import "@/styles/globals.css";
import { type Session } from "next-auth";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "JustPal",
  description:
    "JustPal is a platform for Palestinian citizens sharing their perspective",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { session: Session };
}) {
  return (
    <MySessionProvider session={params.session}>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>{children}</body>
      </html>
    </MySessionProvider>
  );
}
