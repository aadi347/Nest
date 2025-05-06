import React from 'react'
import TopImageGrids from './TopImageGrids'
import PropertyFeatures from './PropertyFeatures'

const MainPropertyPages = () => {
    return (
        <div>
            <TopImageGrids />
            <div className='py-10 px-10'>
                <h1 className='text-3xl text-gray-700 font-bold text-left '>Luxe Villa, Patna-Bihar</h1>
                <p className='text-gray-400 py-2 text-sm'>📍800027 Rajendar Nagar, Patna - Bihar</p>
                <h1 className='text-3xl text-gray-700 font-bold text-left py-10'>Property Details</h1>
                <div>
                    <PropertyFeatures />
                    <div className='grid grid-cols-4 gap-4 px-10'>
                        <div className='col-span-2'>
                            <h1 className='text-2xl text-gray-700 font-bold text-left py-10'>Property Description</h1>
                            <p className='text-gray-400 text-sm'>Welcome to this beautifully designed 3-bedroom, 2-bathroom home, perfect for families or those looking for a comfortable and stylish living space. As you step inside, you’re greeted by a bright, open-concept living room featuring large windows that fill the space with natural light, making it feel airy and inviting.

The kitchen is a chef’s dream with sleek countertops, stainless steel appliances, and ample cabinet space for storage. The adjoining dining area is perfect for family meals or entertaining guests.

The master bedroom is a true retreat, offering generous space, a walk-in closet, and an ensuite bathroom with modern fixtures, including a large soaking tub and a separate shower. The additional two bedrooms are spacious and offer plenty of closet space, perfect for children, guests, or a home office.

Step outside to a private, fully fenced backyard — a perfect spot for outdoor gatherings, gardening, or simply relaxing. The home also includes a two-car garage with additional storage space.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default MainPropertyPages
