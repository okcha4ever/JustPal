import Image from "next/image";

const Bubbles = () => {
    return (
      <section className="relative space-y-96">
        <div className="absolute w-full inline-flex justify-between px-20">
            <Image width={400} height={400} className="w-auto" alt="chat bubble" src="/chat.svg"/>
            <Image src="/help.svg" width={400} height={400} className="w-auto" alt="help bubble"/>
        </div>

        <div className="absolute w-full inline-flex justify-between px-20 pt-44">
            <Image width={400} height={400} className="w-auto" alt="news bubble" src="/news.svg"/>
            <Image width={400} height={400} className="w-auto" alt="stories bubble" src="/stories.svg" />
        </div>

        
      </section>
    );
  };
  
  export default Bubbles;