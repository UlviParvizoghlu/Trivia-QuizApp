import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../api/api'
import QuestionCard from '../components/QuestionCard'
const Quiz = () => {
  const {difficulty,amount} = useParams()
  const [questionsData, setQuestionsData] =useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getData = async () =>{
      const data = await api.fetchQuizData(difficulty,amount)
      setQuestionsData(data)
    }
    getData()
  }, [])

  console.log(questionsData, "questionsData");
  

  return (
    <div>
      <QuestionCard
       questionsData={questionsData}
       score={score}
       setScore={setScore}
       count={count}
       setCount={setCount}
       />
    </div>
  )
}

export default Quiz