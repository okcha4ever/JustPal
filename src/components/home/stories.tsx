import Image from 'next/image';
import React from 'react'

const Stories = () => {
  return (
    <>
    <div className="ml-3 mt-7 h-[340px] w-[348.1px] rounded-xl bg-[#58C470]">
      <div className="flex items-center justify-center">
        <Image
          width={40}
          height={40}
          alt="profile avatar"
          src="/profile-avatar-img.svg"
          className="size-32 rounded-full p-3"
        />
        <p className="text-xl text-[#ffff]">Wade Warren</p>
      </div>
      <h3 className="ml-10 text-3xl text-[#ffff]">Hello world...</h3>
      <Image
        alt="waves"
        width={100}
        height={100}
       src="/wave-haikei (1).svg"
        className="w-auto"
      />
    </div>
  </>
  )
}

export default Stories;