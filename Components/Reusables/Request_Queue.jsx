import React from 'react'
import Image from "next/image"
import { useState } from 'react'
import { Frown, Smile, Star, Clock } from 'react-feather'
import { styles,Reusable_Button } from '../../Components/index'

const Request_Queue = (props) => {
    const [isClicked, setisClicked] = useState(false)
    const iconClicked = 'fill-white animate-jello '
    const iconUnClicked = 'fill-transparent animate-wiggle '

    const { Artiste, Title, avatar_image, Likes, Dislikes, width, height, color,button,disabled, requestFn, buttonText, item, changeId, index } = props
    return (
        <div className={`flex flex-row items-center ${color} ${height} ${width}`}>
            <div className="flex flex-row  gap-10 w-[54.5%] lg:w-full">
                <div className='flex flex-row items-center gap-[2rem]  w-[15rem] lg:w-[70%]'>
                    <Star cursor='pointer' onClick={() => setisClicked(!isClicked)} className={`stroke-white ${isClicked ? iconClicked : iconUnClicked} ease-in duration-300 delay-200 stroke-1  h-[1.2rem] w-[1.2rem]`} />
                    <Image className='rounded-full  ring-[1px] ring-white' src={avatar_image} alt='' width={40} height={40} />
                    <p className={`${styles.songBody} capitalize font-thin text-gray-500`}>{Artiste} </p>
                </div>
                <div className=' w-[15rem] lg:w-[30%] flex items-center'>
                    <p className={`${styles.songBody} font-thin text-white `}> {Title}</p>
                </div>
            </div>

            <div className="flex  h-[6rem]  w-full lg:w-[30%]  gap-10 lg:gap-0 flex-row items-center justify-center ">
              <div className='w-[85%] items-center justify-start flex flex-row gap-[2.76rem]'>
              <Smile className={`stroke-white lg:hidden fill-transparent stroke-1  h-[1.2rem] w-[1.2rem]`} />
                <Frown className={`stroke-white  lg:hidden fill-transparent stroke-1  h-[1.2rem] w-[1.2rem]`} />
                <Clock className="stroke-white lg:hidden  stroke-[1.2px]  h-[1.2rem] w-[1.2rem]" />
                <p className={`${styles.songBody} font-thin text-white`}>4:35</p>
              </div>
            </div>
        </div>

    )
}

export default Request_Queue