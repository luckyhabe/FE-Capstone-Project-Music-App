import React from 'react'
import {assets} from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-arpound'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div> 
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <p className='font-semibold'>Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify gap-1 pl-1'>
                <h1>Create new playlist</h1>
                <p>Lets explore your music</p>
                <buttton className='px-4 py1.5 bg-white text-[15] text-black bg rounded-full mt-4 '>Add New Playlist</buttton>

            </div>

        </div>

    </div>
  )
}

export default SideBar