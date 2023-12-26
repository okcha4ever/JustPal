import Chatbot from "@/components/chatbot/Chatbot";
import MyReactQueryProvider from "@/providers/MyReactQueryProvider";
import MySessionProvider from "@/providers/MySessionProvider";
import "@/styles/globals.css";
import { type Session } from "next-auth";
import { Toaster } from "sonner";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500",
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
      <MyReactQueryProvider>
        <html lang="en">
          <body className={`relative font-sans ${poppins.variable}`}>
            <div className="fixed bottom-5 right-0 pb-5 pe-10">
              <Chatbot />
            </div>
            <Header />
            {children}
            <Toaster richColors />
          </body>
        </html>
      </MyReactQueryProvider>
    </MySessionProvider>
  );
}
