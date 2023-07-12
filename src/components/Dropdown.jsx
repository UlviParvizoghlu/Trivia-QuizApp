import React from 'react'

const Dropdown = ({data, setDifficultyChange}) => {
  return (
    <div className=''>
        <select className='w-[350px] h-[50px] border-2 rounded-lg' onChange={e => setDifficultyChange(e.target.value)} name="" id="">
            {
                data.map((dt,i) =>{
                    return <option value={dt}>{dt}</option>
                })
            }
        </select>
    </div>
  )
}

export default Dropdown