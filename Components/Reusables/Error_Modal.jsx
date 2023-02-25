import React from 'react'

const Error_Modal = () => {
  return (
    <div className=" backdrop-blur-[2rem]  h-screen w-screen flex items-center justify-center">
    <div className="h-[15rem] shadow-xl rounded-md bg-white relative  opacity-30 flex items-center justify-center w-[40rem] ">
    </div>
    <div className="absolute flex flex-col gap-[2rem] h-full w-full items-center justify-center">
    <h1 className="text-4xl text-black">Oops looks like there's an issue</h1>
    <button type="button" className="h-[3.5rem] w-60  text-blue-500 bg-white hover:text-white border border-gray-800/[.25] hover:bg-blue-500 focus:ring-1 focus:outline-none focus:ring-white font-lg rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 ">Let's try this again</button>
    </div>
  </div>
  )
}

export default Error_Modal