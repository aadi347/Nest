
import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search';
import { RouteSelect } from './RouteSelect';
import Plan from './Plan';

const LeftBar = () => {
    return (
        <div className='bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg shadow p-4'>
            <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-49px)]'>
                {/* to do main side bar content */}
                <AccountToggle />
{/* `               <Search /> */}
                <RouteSelect />
            </div>
            <Plan />
        </div>
    )
}

export default LeftBar
