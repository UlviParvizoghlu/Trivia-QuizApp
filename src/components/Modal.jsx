import React from 'react'

const Modal = ({score}) => {
  return (
    <div className='text-center'>

        <div className='font-extrabold mb-3 text-white text-2xl' >Score: {score}</div>
        <div onClick={()=>{window.location="/"}} className='w-[350px] h-[50px] text-xl font-semibold cursor-pointer mt-[1rem] bg-purple-600 text-white border-transparent rounded-lg flex items-center justify-center'>Retry</div>
    </div>
  )
}

export default Modal