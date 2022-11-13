import React from 'react'
import {useNavigate} from 'react-router-dom'

function Result({score,setScore,name}) {

    const navigate = useNavigate()
  
    const handleBack = () => {
        navigate('/')
        setScore(0)
    }
    
  return (
    <div className=' flex items-center h-screen m-auto justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'> 
   <div className=' grid m-auto justify-center p-32 rounded-md '>
   {score <= 60 ? <p className='bg-transparent  border-2  p-10 w-60 rounded-md mb-6 font-pro font-semibold text-2xl  border-cyan-400'>Payah lu {name}, skor cuma {score}</p>
    : <p className='bg-cyan-200 border-2 border-green-400 p-10 w-60 rounded-md mb-6 font-pro font-semibold text-2xl'> Hebat {name} skor kamu {score} </p>}
    <button onClick={handleBack} className='bg-blue-200 p-2  rounded-md mx-16 flex justify-center border-2 border-cyan-400 hover:bg-transparent'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>

    </button>
   </div>
    
    </div>
  )
}

export default Result