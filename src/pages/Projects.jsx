import React from 'react'
import Cards from './Cards'

const Projects = () => {
 
  return (
    <div className='max-w-[1300px] m-auto px-2  flex flex-col mt-5 gap-7'>
      <div>

        <div className='flex flex-col justify-center items-center] w-[90%] lg:w-[60%] m-auto text-center'>
          
           
          <h1 className='text-[37px] font-bold text-blue-500'>My Work</h1>
          <p className='text-[15px] font-semibold text-gray-600'>I built these projects using React.js, HTML, Tailwind CSS, React Redux Toolkit, React Hooks like useState, useEffect, useReducer, useContext, and more for state management, APIs for dummy data, and React Router for website navigation..</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center flex-wrap md:flex-row'>
        <Cards></Cards>

      </div>
    </div>
  )
}

export default Projects
