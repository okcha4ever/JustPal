import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChatTrigger from "./ChatTrigger";
import ChatForm from "./ChatForm";

const Chatbot = () => {
  return (
    <Popover>
      <PopoverTrigger className="z-50">
        <ChatTrigger />
      </PopoverTrigger>
      <PopoverContent className="max-h-[500px] w-[400px] overflow-y-auto">
        <div>PalChat</div>
        <ChatForm />
      </PopoverContent>
    </Popover>
  );
};

export default Chatbot;
