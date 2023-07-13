import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../api/api'
import QuestionCard from '../components/QuestionCard'
import Modal from '../components/Modal'
const Quiz = () => {
  const {difficulty,amount} = useParams()
  const [questionsData, setQuestionsData] =useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [modal,setModal] = useState(false)

  useEffect(() => {
    const getData = async () =>{
      const data = await api.fetchQuizData(difficulty,amount)
      setQuestionsData(data)
    }
    getData()
  }, [])

  

  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500'>
      {
        modal ? <Modal score={score}/> : 
      <QuestionCard
       questionsData={questionsData}
       score={score}
       setScore={setScore}
       count={count}
       setCount={setCount}
       modal={modal}
       setModal={setModal}
       />
      }
    </div>
  )
}

export default Quiz