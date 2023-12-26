"use client";

import { User2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ChatMessages = ({
  chatMessage,
}: {
  chatMessage: { userMessage: string; aiResponse: string };
}) => {
  const { data: session } = useSession();

  return (
    <div className="space-y-5">
      {/* User's message */}
      <div className="flex w-full flex-row-reverse items-end justify-start gap-2">
        {session?.user && session.user.image ? (
          <Image
            src={session?.user.image}
            width={30}
            height={30}
            alt="user image"
            className="rounded-full"
          />
        ) : (
          // <Image src=""
          <User2 size={25} />
        )}
        <p className="rounded-br-lg rounded-tl-lg border px-5 py-3">
          {chatMessage.userMessage}
        </p>
      </div>
      {/* AI's message */}
      <div className="inline-flex items-start">
        <Image src="/robot.svg" width={40} height={40} alt="robot PalChat" />
        <p className="rounded-br-lg rounded-tl-lg border px-5 py-3">
          {chatMessage.aiResponse}
        </p>
      </div>
    </div>
  );
};

export default ChatMessages;
