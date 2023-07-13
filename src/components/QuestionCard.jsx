import React, { useEffect, useState } from 'react'

const QuestionCard = ({questionsData, score, setScore, modal, setModal,count, setCount}) => {

  const[timer,setTimer] = useState(30)

  const approvedChoice = (e) =>{
    const checkAnswer = e.currentTarget.value===questionsData[count]?.correct_answer
    if(checkAnswer){
      setScore(score +100)
    }
    setCount(count+1)
    if(count==9) setModal(true)
    setTimer(30)
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(timer>0){

        setTimer(timer-1)
      }
      if(timer == 0 && count<10){
        setCount(count+1)
        setTimer(30)
      }else if(count>=10){
        setModal(true)
      }

    },1000)
    return () =>{
      clearInterval(interval)
    }
  },[timer])
  return (
    <div className='max-w-[700px] w-[100%]'>
      <div className='w-[50px] h-[50px] text-2xl font-extrabold bg-black text-white flex items-center justify-center rounded-full mb-[1rem]'>{timer}</div>
      <div className='font-extrabold text-white text-2xl mb-[10px]'>{count+1}/10 -{questionsData[count]?.question}</div>
      {
        questionsData[count]?.answers?.map((answer,i) => (
         <button className='m-[0.3rem] w-[48%] bg-white rounded-lg border py-2 cursor-pointer text-xl hover:bg-slate-200' onClick={approvedChoice} key={i} value={answer}>{answer}</button>
))
      }
    </div>
  )
}

export default QuestionCard