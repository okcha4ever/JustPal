import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='flex items-center justify-center pt-7'>
      <div>
            <Image width={400} height={400} alt='logo img' src='/Logo.svg' className='bg-transparent'/>
      </div>        


    </section>
  )
}

export default page