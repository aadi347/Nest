import React from 'react'

const AccountToggle = () => {
    return (
        <div className='border-b mb-4 pb-4 mt-2 border-stone-300'>
            <button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full'>
            <img src="https://img.freepik.com/premium-photo/simple-man-icon-with-slight-smile-set-against-round-minimalistic-backdrop-perfect_1283595-13323.jpg" 
             alt='account' 
             className='size-10 rounded-full shrink-0 bg-violet-500 shadow' 
             />
             {/* text box */}
             <div className='text-start'>
                  <span className='text-sm font-bold text-black block'>
                    Aditya kumar
                  </span>
                  <span className='text-xs text-gray-500 block'>
                    admin@nest.com
                  </span>
             </div>
            </button>

        </div>
    )
}

export default AccountToggle
