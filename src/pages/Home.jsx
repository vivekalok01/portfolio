import { IoMdDownload } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import Skills from "./Skills";

const Home = () => { 
    return (
        <>
        <div className="flex max-w-[1300px] px-2 flex-col-reverse m-auto justify-between lg:flex-row lg:mt-[100px] ">
            <div className=" flex  flex-col justify-center gap-10 lg:order-first">
                    <div className="flex flex-col">
                        <h1 className="text-[37px] font-extrabold leading-10 sm:text-[48px] sm:font-extrabold md:text-[60px] md:font-extrabold">Hi,</h1>
                        <h1 className="text-[37px] font-extrabold sm:text-[48px] md:text-[60px] md:font-extrabold">I'am <span className="text-blue-500 text-[40px] md:text-[45px] lg:text-[50px]">Vivek Alok</span></h1>
                        <h1 className="text-[37px] font-extrabold sm:text-[48px] md:text-[60px] md:font-extrabold">Front-End Developer</h1>
                        <button className="bg-blue-500 w-[150px] p-3 flex justify-center items-center gap-3 rounded-md text-white">Hire Me <IoMdDownload className="text-[23px]" /></button>
                    </div>
                    <div className="flex gap-4 text-[30px]">
                        <a href=""><IoLogoInstagram /></a>
                        <a href=""><CiLinkedin /></a>
                        <a href=""><CiFacebook /></a>
                    </div>
            </div>
            <div className="flex  justify-center  mt-2 items-center ">
                <div className="Profile_Animation ">
                   
                </div>
            </div>
        </div>
        <Skills></Skills>
        </>
    )
}

export default Home
