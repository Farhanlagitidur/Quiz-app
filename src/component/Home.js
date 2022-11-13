import React from 'react'
import {useState} from 'react'
import Categories from './Categories';
import {useNavigate} from 'react-router-dom'

function Home({name, setName ,fetchQuestion }) {
  const [category ,setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false);
    
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(!category  || !name){
      setError(true);
      return;
    }else {
      setError(false);
      fetchQuestion(category, difficulty);
      navigate('/quiz');
    }
  }


  return (
    <>
      
      
      <div className='flex items-center h-screen justify-center bg-gradient-to-b from-gray-900 to-gray-600 '>
       <div className=' grid p-14 rounded-md drop-shadow-2xl'>
       <div className='  bg-slate-300 mb-10 p-3 text-2xl font-pro rounded-md'>
        <h1>🔥 ????????? 🔥</h1>
       </div>
        {error && <p className='bg-red-400 text-white font-pro text-lg rounded-md p-1 m-2'> bro isi Dulu !!</p>}
        <input className=' border-2 border-blue-200 rounded-md  p-3 drop-shadow-xl placeholder:font-pro' placeholder='Enter your Name'
        onChange={(e) => {
          setName(e.target.value)
        }}></input>
       <select className='border-2 border-blue-200 rounded-md  mt-10 drop-shadow-xl p-3 placeholder:font-pro'
          value={category} onChange={(e) => {
            setCategory(e.target.value)
          }}>
            {Categories.map((n) => (
            <option className='text-black bg-slate-200 rounded-md' value={n.value} key={n.category}>{n.category}</option>
          ))}
       </select>
       <select className='border-2 border-blue-200  rounded-md mt-10  p-3 drop-shadow-xl placeholder:font-pro'
        value={difficulty}  onChange={(e) => {
          setDifficulty(e.target.value)
        }}>
          <option value={'easy'} defaultValue>Easy</option>
          <option value={'medium'}>Medium</option>
          <option value={'hard'}>Hard</option>
       </select>
       
        <button className='border-2 px-6 py-4 rounded-md mt-10 bg-slate-200 font-pro text-xl border-blue-200 hover:bg-transparent'
        onClick={handleSubmit}
        >Start Quiz 
        </button>
        
        </div>
        <div className='absolute bottom-0 w-screen p-1  font-semibold text-xl font-pro bg-gradient-to-r from-gray-100 to-gray-300'>Created With ❤️ by HAN </div>
     
      </div>
    </>
  )
}

export default Home;
