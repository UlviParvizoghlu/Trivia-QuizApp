import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';
const Introduce = () => {

  const difficulty = ['easy', 'medium', 'hard']
  const [difficultyChange, setDifficultyChange] = useState('')

  const navigate = useNavigate()

  const TOTAL_QUESTIONS = 10

  const startQuiz = () =>{
    if(difficultyChange)
    {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }

  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500'>
      <div className='max-w-[700px] bg-white w-[100%] flex flex-col items-center justify-center p-[1.5rem] rounded-lg border-transparent'>
        <img src={logo} alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className='w-[350px] h-[50px] text-xl font-semibold cursor-pointer mt-[1rem] bg-purple-600 text-white border-transparent rounded-lg flex items-center justify-center'>Quiz-ə başla</div>
      </div>
    </div>
  );
};

export default Introduce;
