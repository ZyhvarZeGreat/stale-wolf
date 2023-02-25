import React from 'react'
import { useRouter } from 'next/router'
import Vox from "../../public/vox.svg"
const Navbar = (props) => {
    const router = useRouter()

    return (
        <div className={`w-[95%]   ${props.height} flex  gap-[5rem] lg:gap-0 lg:justify-between  flex-row items-center justify-start`}>


            <button className='  font-clash flex  items-center  justify-start text-7xl font-medium text-white ' onClick={() => router.push('/')}>
                <Vox className='w-[120px] h-[120px] lg:h-[90px] lg:w-[90px]'  />
            </button>


            <button className="font-clash  lg:text-lg text-2xl  text-white " onClick={() => router.push('/Requests')}>
                Request a Song
            </button>


        </div>
    )
}

export default Navbar