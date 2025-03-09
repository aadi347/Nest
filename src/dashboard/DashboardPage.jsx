import React from 'react'
import Grid from "./Grid"
import LastFlatAdd from "./LastFlatAdd"
import TopBar from './TopBar'
const DashboardPage = () => {
    return (
        <div className='h-screen'>
            {/* <TopBar /> */}
            <Grid />
            <LastFlatAdd/>
        </div>
    )
}

export default DashboardPage
