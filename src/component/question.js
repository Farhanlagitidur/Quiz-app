import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Question = ({
  options,
  currQues,
  setCurrQues,
  questions,
  correct,
  setScore,
  score,
  setQuestion,
}) => {

  const [selected, setSelected] = useState()
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleCheck = (i) => {
    setSelected(i)
    if(i === correct) setScore(score + 10)
     setError(false)
  }

  const handleNext = () => {
    if(currQues > 8){
      navigate('/result')
    }else if(selected){
      setCurrQues( currQues + 1)
       setSelected() 
    }else
      setError('Jawab Dulu Peler!')
  }

  const handleSelect = (i) => {
    if(selected === i && selected === correct) return 'bg-green-500';
    else if(selected === i && selected !== correct) return 'bg-red-200';
    else if(i === correct) return 'bg-green-200';
  }

  const handleQuit = () => {
    setCurrQues(0)
    setQuestion()
    navigate('/')
  }
 
  return (
    <>
  <div className=' flex items-center justify-center h-full  '>
    <div className='grid mx-3  rounded-md  '>
    <div className=' px-6  '>
       <h2 className='text-left font-pro not-italic  text-2xl font-semibold rounded-md  '
       dangerouslySetInnerHTML={{__html:questions[currQues].question}}></h2>
       <p className='text-right font-pro font-bold  '>{currQues + 1 }/10</p>
    </div>
    <div  className=' grid grid-cols-1 p-3  '>
      {error && <p className='bg-red-400 text-white font-pro text-lg rounded-xl p-2 mx-2'>{error}</p>}
      {options && 
        options.map((i) => (
          <button 
          key={i}
          dangerouslySetInnerHTML={{__html: i}}
          onClick ={() => handleCheck(i)}
          disabled={selected}
          className= {`p-4  m-2 border-2 font-pro font-semibold  rounded-2xl  border-sky-300  hover:border-sky-700 ${selected && handleSelect(i) }`}>
          </button>
        ))}
    </div>
    <div className='grid grid-cols-2 gap-4  mx-3 '>
    <button className='bg-cyan-100 p-2 rounded-md m-2 border-2 border-blue-300 flex justify-center hover:bg-slate-200'
     onClick={handleQuit}
     ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
     <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
     <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>
   
   </button>
      <button className='bg-cyan-100 p-2 font-pro font-semibold rounded-md m-2 border-2 border-blue-300  flex justify-center hover:bg-slate-200'
      onClick={handleNext}
      > Next<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" ml-4 w-6 h-6 ">
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
    </svg>
    
        </button>
    </div>
   

    </div>
  </div>
    </>
  )
}

export default Question