import React, { useEffect, useState } from 'react'
import { styles } from '@/Components/index'
import Image from "next/image"
import { fetchRequests, fetchSongDetails, postRequests } from '../Services/index'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Request_Queue, Loader, Error_Modal, Reusable_Button, Navbar } from '@/Components/index'
import { Frown, Smile, Star, Clock } from 'react-feather'
import axios from 'axios'
const Requests = () => {

  // const [isClicked, setisClicked] = useState(false)
  // const [isPlayed, setIsPlayed] = useState(false)
  // const iconClicked = 'fill-white animate-jello '
  // const iconUnClicked = 'fill-transparent animate-wiggle '


  // const [songId, setSongId] = useState(0)
  // const [requestId, setRequestId] = useState(0)

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['music'],
  //   queryFn: fetchSongDetails
  // })

  // if (isLoading) {
  //   return <Loader />
  // }

  // if (isError) {
  //   return <Error_Modal />
  // }

  // const { artists, album } = data[songId]
  // // const requestSong = useMutation((data) => postRequests(data))

  // // const handleNewRequest = (item) => {
  // //   setIsPlayed(!isPlayed)
  // //   const requestedSong = data[songId]?.name
  //   const requestedArtiste = data[songId]?.artists[0]?.name
  //   const requestedCoverUrl = data[songId]?.album?.cover[0]?.url
  //   const newData = { song: requestedSong, coverUrl: requestedCoverUrl, artiste: requestedArtiste, isPlayed: isPlayed }
  //   console.log(songId)
  //   setSongId(item)
  //   console.log(newData)
  //   // requestSong.mutate(newData)
  // }

  // // CREATE A FUNCTION THAT TAKES IN THE INDEX OF THE PARTICULAR SONG  AND USES THAT INDEX TO SELECT THE SONG TO SEND TO THE REQUEST ENDPOINT

  // IF THE SONG IS SENT TO THE REQUEST ENDPOINT MODIFY THE ISAVAILABLE AND ISPLAYED  ENTRIES OF THE OBJECT 
  // console.log(newData)


  return (
    // <div className='flex items-center justify-center mix-blend-multiply bg-cover'>

    //   <div className='flex flex-col items-center justify-center h-screen w-screen  opacity-100 bg-blend-multiply bg-black/30 absolute backdrop-brightness-100 backdrop-saturate-150 backdrop-blur-[.9rem]  top-0 right-0 bottom-0 left-0 z-10'>
    //     <Navbar />
    //     <div className={`divide-y w-[90%]  lg:w-[95%] overflow-y-scroll divide-slate-400/25  h-[80%]`}>

    //       {
    //         data.map((data, index) => {
    //           const { name, artists, album } = data
    //           return (
    //             <div key={index} className={`flex flex-row lg:flex-col items-center h-[8rem] lg:h-[10rem]  w-[full] `}>

    //               <div className="flex flex-row    gap-10 w-[54.5%] lg:w-full lg:h-[50%] ">
    //                 <div className='flex  flex-row items-center gap-[2rem] w-[15rem] lg:gap[3rem]  lg:w-[80%]'>
    //                   <Star cursor='pointer' className={`stroke-white  ease-in duration-300 delay-200 stroke-1  h-[1.07rem] w-[1.07rem]`} />
    //                   <Image className='rounded-full  ring-[1px] ring-white' src={album.cover[0]?.url} alt='' width={40} height={40} />
    //                   <p className={`${styles.songBody} font-light text-gray-600/80   lg:text-[.9rem]`}>{artists[0]?.name} </p>
    //                 </div>
    //                 <div className=' w-[15rem] lg:w-[8rem]  flex items-center lg:justify-center'>
    //                   <p className={`${styles.songBody} font-thin lg:text-start text-white lg:text-[.9rem] `}> {name}</p>
    //                 </div>
    //               </div>

    //               <div className="flex flex-rowlg:w-full items-center justify-center gap-10 lg:h-[50%] ">
    //                 <Smile className={`stroke-white xl:hidden fill-transparent stroke-1  h-[1.07rem] w-[1.07rem]`} />
    //                 <Frown className={`stroke-white xl:hidden fill-transparent stroke-1  h-[1.07rem] w-[1.07rem]`} />
    //                 <Clock className="stroke-white  sm:hidden stroke-[1.07px]  h-[1.07rem] w-[1.07rem]" />
    //                 <p className={`${styles.songBody} sm:hidden font-thin text-white`}>3:35</p>
    //                 {/* <Reusable_Button disabled={isPlayed && index === songId   } width='w-[9rem] lg:w-[14rem]' height='h-[3rem]' item={index} text={isPlayed && index === songId ? 'Requested':'Request'} handleClick={handleNewRequest} /> */}
    //               </div>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>

    //   <div className={`absolute transition-all  ease-in-out duration-1000 top-0 bottom-0 left-0 right-0 bg-top h-full w-full bg-[url(../public/cover.jpg)]   bg-cover `}>

    //   </div>
    // </div>
<div>
  request
</div>
  )
}

export default Requests