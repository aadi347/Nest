import React from 'react'
import Grid from "./Grid"
import LastFlatAdd from "./LastFlatAdd"

import PropertyStatusChart from './PropertyStatusChart'
const DashboardPage = () => {
    return (
        <div className='h-screen '>
            {/* <TopBar /> */}
            <Grid />
            <PropertyStatusChart />
            <LastFlatAdd/>
            
        </div>
    )
}

export default DashboardPage
