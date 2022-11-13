import React from 'react'
import {useEffect , useState} from 'react'
import Question from './question'
import Spinner from './Spinner'

const Quiz = ({questions, name, setQuestion , score ,setScore}) => {
    const [options, setOptions] = useState()
    const [currQues, setCurrQues] = useState(0)

    useEffect(() => {

        setOptions(
           questions && 
           handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
           ]) 
        )
    },[currQues ,questions])

    const handleShuffle = (param) => {
        return param.sort(() => Math.random() - 0.5)
    }

    return (
    
        <div className='bg-slate-200 grid h-screen'>

          { questions ? (
            <>
            <Question
            options={options}
            name={name}
            score={score}
            setScore={setScore}
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            correct={questions[currQues]?.correct_answer}
            setQuestion={setQuestion}
            />
            </>
         ) : (
            <Spinner/>
         )}

        </div>
    )
}

export default Quiz