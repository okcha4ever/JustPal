import MySessionProvider from "@/providers/MySessionProvider";
import "@/styles/globals.css";
import { type Session } from "next-auth";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500"
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
        <body className={`font-sans ${poppins.variable}`}>{children}</body>
      </html>
    </MySessionProvider>
  );
}
