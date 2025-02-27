import React from 'react'

const Grid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            <div className='bg-white rounded-lg shadow p-4'>
                <h1 className='text-lg font-bold'>Total Property</h1>
                <p className='text-3xl font-bold'>1,200</p>
            </div>
            <div className='bg-white rounded-lg shadow p-4'>
                <h1 className='text-lg font-bold'>New Property</h1>
                <p className='text-3xl font-bold'>1,200</p>
            </div>
            <div className='bg-white rounded-lg shadow p-4'>
                <h1 className='text-lg font-bold'>Visitors Count</h1>
                <p className='text-3xl font-bold'>1,200</p>
            </div>
            
        </div>
    )
}

export default Grid
