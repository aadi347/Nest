import React from 'react'


const NestBoardFeature = () => {
  return (
    <div className='relative h-screen pt-40'>
        <div className='px-4 py-2 relative justify-center items-center text-center'>
            <h1 className='py-2 px-2 text-4xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#ABDCFF] via-[#0396FF] to-[#0396FF] md:text-5xl lg:text-6xl dark:text-white animate-reveal'>Introducing Nestboard</h1>
            <p className='text-lg font-normal text-gray-500 lg:text-xl sm:px-16  dark:text-gray-400'>A tool that is built for manage your assests</p>
        </div>
        <div className=''>
            <img
            src="/NestBoardImage.png"
            alt='Nestboard'
            className='h-full px-10 py-5 rounded-lg w-full'
            >

            </img>
        </div>
    </div>
  )
}

export default NestBoardFeature