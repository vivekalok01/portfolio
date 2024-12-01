import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { Form } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='p-2'>


        <div className=' bg-slate-100 max-w-[1300px] mt-[20px] m-auto grid md:grid-cols-3 md:h-[570px]'>
            <div className='bg-blue-500 flex flex-col justify-center md:pb-36  gap-2 md:gap-4 text-white p-2'>
                <h1 className='text-[30px] md:text-[35px] lg:text-[40px]  font-bold'>Get in Touch</h1>
                <p className='flex items-center text-[14px] md:text-[15px] lg:text-[17px] '>Hi, I'm Vivek Alok.
                     A passionate Front-end React Developer  </p>
                     <a className='flex gap-2  text-[14px] md:text-[15px] lg:text-[17px] ' href="https://maps.app.goo.gl/8Syyk5qNGz4NnVrs9">India,
                     Delhi. <CiLocationOn className='locationCss' /> </a>
               
                <div className='flex flex-col gap-3  text-[14px] md:text-[15px] lg:text-[17px]'>
                    <h2>+916203163957</h2>
                    <a href='mailto:vivekalok321@gmail.com' className='flex gap-2 items-center text-[14px] md:text-[15px] lg:text-[17px]'> vivekalok321@gmail.com <AiOutlineMail className='text-[14px] md:text-[18px]' /></a>
                   
                </div>
            </div>
            <form action="" className='flex  flex-col justify-center gap-6 items-center md:col-span-2 mt-[30px] '>
                <input type="text" placeholder='Enter Full Name' required className='border-[1px] border-gray-400 rounded-md w-[85%] h-[50px] px-3' />
                <input type="number" placeholder='Enter Mobile Number' required className='border-[1px] border-gray-400 rounded-md w-[85%] h-[50px] px-3' />
                <input type="text" placeholder='Enter Email Address' required className='border-[1px] border-gray-400 rounded-md w-[85%] h-[50px] px-3' />

                <input type="text" placeholder='Enter Subject' className='border-[1px] border-gray-400 rounded-md w-[85%] h-[50px] px-3' />
                <textarea name="" id=" " rows={5} className='rounded-md border-[1px] border-gray-400 w-[85%] h-[50px] px-3'></textarea>
                <button className='border-[1px] text-white bg-blue-500 border-gray-400 rounded-md w-[85%] h-[50px] px-3 hover:bg-blue-600'>Submit</button>
            </form>


        </div>
        </div>
    )
}

export default Contact