import './App.css';
import Home from './component/Home'
import Quiz from './component/quiz'
import Result from './component/result';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'


function App() {
  const [name, setName] = useState('')
  const [questions, setQuestion] = useState()
  const [score, setScore] = useState(0);
  

  const fetchQuestion = async (category = '', difficulty = '') =>{
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
       category && `&category=${category}`
       }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
      setQuestion(data.results)
    
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home 
         name ={name}
        setName={setName}
        fetchQuestion={fetchQuestion}
        />}/>

        <Route path='/quiz' element={ <Quiz 
         name ={name}

         questions ={questions}
         score={score}
         setScore={setScore}
         setQuestion ={setQuestion}
        />}/>

        <Route path='/result' element={<Result
          name={name}
          score={score}
          setScore={setScore}
        />}/>
      </Routes>


    </div>
    </BrowserRouter>
    
  );
}

export default App;
