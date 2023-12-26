import Image from "next/image";

const Bubbles = () => {
  return (
    <section className="relative space-y-96">
      <div className="absolute inline-flex w-full justify-between px-20">
        <Image width={100} height={400} alt="chat bubble" src="/chat.svg" />
        <Image
          src="/help.svg"
          width={100}
          height={400}
          // className="w-auto"
          alt="help bubble"
        />
      </div>

      <div className="absolute inline-flex w-full justify-between px-20 pt-44">
        <Image width={100} height={400} alt="news bubble" src="/news.svg" />
        <Image
          width={100}
          height={400}
          alt="stories bubble"
          src="/stories.svg"
        />
      </div>
    </section>
  );
};

export default Bubbles;
