import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import React from 'react'

const Skills = () => {
    return (
        <div className="max-w-[1300px] m-auto mt-10 flex flex-col gap-2">
            <div>
                <h1 className="font-bold text-[20px]">Tech Stack</h1>
            </div>
            <div className=' flex text-blue-500 gap-10 text-[50px]'>
                <div>
                    <FaHtml5 />
                </div>
                <div>
                    <SiCss3 />
                </div>
                <div>
                    <TbBrandJavascript />
                </div>
                <div>
                    <FaBootstrap />
                </div>
                <div>
                    <RiTailwindCssFill className="" />
                </div>
            </div>
        </div>
    )
}

export default Skills
