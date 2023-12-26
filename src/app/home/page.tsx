import React from 'react'

const Home = () => {
  return (
    <section>
         <section className="flex items-center justify-center border-b border-[#000000] text-xl space-x-96 p-5">
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

        <div className='flex items-center justify-center space-x-2'>
            <img src='/profile-avatar-img.svg'  className='rounded-full'/>
            <p className='text-xl'>Chloe Milagres</p>
        </div>

      </section>

      <div>
            Stories
      </div>
      
      <div>
        <div className='bg-[#58C470] w-[348.1px] h-[340px] rounded-xl ml-3 mt-7'>
            <div className='flex items-center justify-center space-x-10 pr-9'>
                <img src='/profile-avatar-img.svg'  className=' size-32 rounded-full p-3'/>
                <p className='text-[#ffff] text-xl'>Wade Warren</p>
            </div>
                <h3 className='text-3xl text-[#ffff] ml-10'>Hello world...</h3>
                <img src='/wave-haikei (1).svg' className='pt-32'/>
        </div>
      </div>

    </section>
  )
}

export default Home;