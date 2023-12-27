import Image from "next/image";

const ChatTrigger = () => {
  return (
    <Image
      src="/robot.svg"
      width={70}
      height={70}
      alt="chat bot robot"
      className="z-50"
    />
  );
};

export default ChatTrigger;
