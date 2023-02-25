// import image from '../public/cover.jpg'
import Image from "next/image"
import { useState, useEffect } from "react"
import cover from '../public/starboy.jpg'
import { useQuery } from "@tanstack/react-query"
import { Frown,Smile,Star,Clock,ArrowRight } from 'react-feather'
import { Request_Queue, Error_Modal, Loader } from "@/Components/index"

import fetchSongDetails from "@/Services/fetchSongDetails"
export default function Home() {

  const [songId, setSongId] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  // const onLikeClicked = () => {
  //   setIsLiked(!isLiked)
  // }



  const { data, status, isLoading, isError } = useQuery({
    queryKey: ['music'],
    queryFn: fetchSongDetails,
    refetchInterval: 5000 * 60 *50
  })


  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <Error_Modal />
  }

  const starClicked = 'fill-white '
  const starNotClicked = 'fill-transparent'

  //  the useEffect has rerendering issues so if a  fix can be implementet it would be appreciated
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSongId(songId + 1)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [songId, data.length])

  console.log(songId)

  const albumCover = data[songId]?.album?.cover[0].url
  const artistName = data[songId]?.artist
  const songName = data[songId]?.name


  const nextAlbumCover = data[songId + 1]?.cover
  const nextArtistName = data[songId + 1]?.artist
  const nextSongName = data[songId + 1]?.name

  console.log(albumCover)
  if(  songId > data.length){
    setSongId(0)
  }
  return (
    <div className="flex   items-center justify-center   bg-cover bg-[url(../public/cover.jpg)]">
      <div className="flex items-center justify-center h-screen w-screen  opacity-100  absolute backdrop-brightness-100 backdrop-saturate-150 backdrop-blur-[1.2rem]  top-0 right-0 bottom-0 left-0 z-10">
        <div className="flex items-end justify-center w-screen h-screen ">
          <div className="flex items-center flex-col justify-center  w-[90%] h-[100%]">

            <div className=" h-[70%]  w-full flex flex-col items-center justify-between ">
              {/* This will be div displaying the  Song Info */}
              <div className=" h-[90%] flex flex-row  items-center justify-between w-full">
                <div className="flex flex-col  text-start items-start gap-10 justify-center h-[80%] w-[50%] ">
                  <p className="text-xl ml-2"> {artistName}</p>
                  <h1 className="text-6xl">{songName}</h1>
                </div>

                {/* This div will show the next song on the queue */}
                <div className="w-[50%] h-[80%] gap-4 flex items-center">
                  <div className="flex text-end flex-col h-[14rem]  gap-12 w-[50%] items-end justify-start" >
                    <p className="text-2xl">{nextArtistName}</p>
                    <h2 className="text-4xl">{nextSongName}</h2>
                  </div>
                  <div className=" flex relative rounded-lg  items-center justify-center h-[14rem] object-top  w-[20rem]">
                    <Image className="h-[100%]  round w-[95%] object-top transition duration-1000 object-cover ease-in"  alt='album cover' fill src={nextAlbumCover} />
                  </div>
                </div>
              </div>

              {/* This div will display the metadata of the songs played like the artists and so on */}

              <div className="w-full h-[20%] flex flex-row items-center justify-between">
                <div className=" h-[100%] w-[40%]  flex items-center flex-row gap-4">
                  <Star onClick={()=>{onLikeClicked()}}  cursor ='pointer' className={` stroke-white ${isLiked ? starClicked: starNotClicked} stroke-1 h-[1.05rem] w-[1.05rem]`}  />
                  <Image className='rounded-full' src={albumCover} fill absolute = 'true' alt='' />
                  <p> Artist - {artistName} </p>
                </div>
                <div className="h-[100%] w-[20%] gap-10 flex items-center justify-center flex-row">
                  <Smile  className=" stroke-white fill-transparent stroke-1 h-[1.05rem] w-[1.05rem]" />
                  <Frown className=" stroke-white fill-transparent stroke-1 h-[1.05rem] w-[1.05rem]"/>
                  <Clock className=" stroke-white fill-transparent stroke-1 h-[1.05rem] w-[1.05rem]" />
                  <p> 4:35 </p>
                </div>

                <div className="h-[100%] w-[40%] gap-4 flex justify-end items-center flex-row">
                  <div className=" h-full w-[80%] flex flex-row items-center justify-center gap-4 ">
                    <div className="w-[50%] flex flex-row items-center justify-center gap-6">
                      <Smile className="stroke-transparent fill-transparent h-[1.2rem] w-[1.2rem]" />
                      <p> dislikes</p>
                    </div>
                    <ArrowRight className="stroke-transparent stroke-[22px]  h-[1.6rem] w-[1.6rem] fill-[#fff] " />
                  </div>

                </div>

              </div>
            </div>

            <div className='h-[35%] flex items-center w-full '>
              <div className='h-full flex flex-col justify-center w-[80%]'>
                <div className=' h-[20%] text-xl w-[100%]'>
                  <span className="uppercase text-lg text-white"> Coming Next</span>
                </div>

                <div className='divide-y overflow-y-scroll divide-slate-400/25  h-[80%]'>

                  {/* This is The Component Responsible for displaying the songs on queue */}

                  {
                    data.map((data, i) => {
                      const { name, artists, album } = data
                      return <Request_Queue isClicked={isLiked} Artiste={artists[0]?.name} Title={name} avatar_image={album.cover[0]?.url} />
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div style={{backgroundImage: `url(${albumCover})`}} className={`absolute transition-all  ease-in-out duration-300 top-0 bottom-0 left-0 right-0 h-full w-full  bg-cover `}></div>
      </div>
  )
}
