import React from 'react'
import { IoHome } from "react-icons/io5";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";
import { FaMoneyBill1 } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareParking } from "react-icons/fa6";
import { FaWater } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";


const PropertyFeatures = () => {
    return (
        <div>
            
                <div className='grid grid-cols-4 px-10 rounded-lg '>
                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><IoHome /></h1>
                        <p className='text-gray-400 text-sm'>3 BHK</p>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><PiMapPinSimpleAreaFill /></h1>
                        <p className='text-gray-400 text-sm'>2000 sq ft</p>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><FaMoneyBill1 /></h1>
                        <p className='text-gray-400  text-sm'>10,000/per month</p>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><FaLocationDot />
                        </h1>
                        <p className='text-gray-400  text-sm'>Patna</p>
                    </div>

                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><FaSquareParking />
                        </h1>
                        <p className='text-gray-400 text-sm'>24/7 - Shaded</p>
                    </div>

                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><FaWater />
                        </h1>
                        <p className='text-gray-400 text-sm'>24/7*365</p>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><MdElectricBolt />
                        </h1>
                        <p className='text-gray-400 text-sm'>24/7</p>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-2xl text-gray-700 font-bold text-left py-10'><RiLuggageDepositFill />
                        </h1>
                        <p className='text-gray-400 text-sm'>20,000</p>
                    </div>

                </div>
            
        </div>
    )
}

export default PropertyFeatures
