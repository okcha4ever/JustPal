"use client";
import { Input } from "@/components/ui/input";
import useChat from "@/hooks/useChat";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, type ZodType } from "zod";
import ChatMessages from "./ChatMessages";

type InputForm = {
  message: string;
};

type ChatMessage = {
  userMessage: string;
  aiResponse: string;
};

const ChatForm = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const { mutateAsync, isLoading, status } = useChat();
  const inputForm: ZodType<InputForm> = z.object({
    message: z
      .string()
      .min(2, { message: "Message too small..." })
      .max(100, { message: "Message too long..." }),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: zodResolver(inputForm),
  });

  const onSubmit = async (data: InputForm) => {
    try {
      const aiResponse = await mutateAsync(data.message);

      if (aiResponse) {
        const updatedChatMessages = [
          ...chatMessages,
          { userMessage: data.message, aiResponse: aiResponse },
        ];
        setChatMessages(updatedChatMessages);
      }
    } catch (error) {
      console.log("Something went wrong");
    }

    reset();
  };

  return (
    <div className="space-y-5">
      <div className="space-y-10">
        {chatMessages.map((message, idx) => (
          <ChatMessages chatMessage={message} key={idx} />
        ))}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sticky inline-flex w-full justify-between space-x-2"
      >
        <Input
          {...register("message")}
          placeholder="Chat with me!"
          className="rounded-full"
        />
        <button
          type="submit"
          className={`flex items-center justify-center rounded-full border bg-[#616161] px-2 py-2 ${
            errors.message?.message && "opacity-50"
          }`}
          disabled={errors.message?.message ? true : false}
        >
          <ArrowUpIcon color="white" size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
