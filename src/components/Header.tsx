

const Header = () => {
    return (
      <section className="flex items-center justify-center border-b border-[#000000] text-xl space-x-96 pb-5">
        <div>
            <img src="/Logo.svg" />
        </div>
        
        <div className="flex items-center justify-center space-x-24">
        <div>
            <a className="text-[#A7A5A5]">News</a>
        </div>

        <div>
            <a className="text-[#A7A5A5]">Stories</a>
        </div>

        <div>
            <a className="text-[#A7A5A5]">Help</a>
        </div>        
        </div>

        <div>
            <button className="bg-black rounded-md text-[#FFFFFF] w-24 h-10">Sign Up</button>
        </div>

      </section>
    );
  };
  
  export default Header;
  