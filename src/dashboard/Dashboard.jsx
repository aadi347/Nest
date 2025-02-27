import React from 'react'
import LeftBar from './LeftBar'
import MainDash from './MainDash'

const Dashboard = () => {
    return (
        <div className='grid gap-4 p-4 bg-gradient-to-r from-violet-200 to-pink-200 grid-cols-[220px,_1fr]'>
            <LeftBar />
            <MainDash />
        </div>
    )
}

export default Dashboard
