import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'
import LastFlatAdd from './LastFlatAdd'


const MainDash = () => {
    return (
        <div className='bg-white bg-opacity-60 rounded-lg pb-4 shadow h-[200vh]'>
            <TopBar />
            <Grid />
            <LastFlatAdd />
        </div>
    )
}

export default MainDash
