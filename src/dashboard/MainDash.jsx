import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'


const MainDash = () => {
    return (
        <div className='bg-white bg-opacity-60 rounded-lg pb-4 shadow h-[200vh]'>
            <TopBar />
            <Grid />
        </div>
    )
}

export default MainDash
