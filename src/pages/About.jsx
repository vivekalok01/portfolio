

const About = () => {
    return (
        <div className="grid grid-rows-2 max-w-[1300px] px-2 m-auto md:flex md:mt-10">
         <div className=" flex justify-center">
            <img className="h-[270px] flex items-center justify-center w-[270px] sm:h-[310px] sm:min-w-[330px]  md:h-[450px] md:min-w-[390px]" src="/about.png" alt="" />
         </div>
            
            <div className="flex  gap-2 lg:gap-3 flex-col justify-start md:justify-center">
                <div> 
                    <h1 className="text-[18px] font-bold text-blue-500 sm:text-[22px] md:text-[23px]">ABOUT ME</h1>
                </div> 
                <div>
                    <h1 className="text-[23px] font-bold sm:text-[24px] md:text-[28px] lg:text-[33px]">Front-end Developer based in Delhi, India </h1>
                </div> 
                <div>
                    <h1 className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Hey, my name is Vivek Alok, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</h1> 
                </div> 
                <div> 
                    <h1 className="text-gray-600 text-[14px] m:text-[15px] md:text-[16px] lg:text-[17px]">My main stack currently is React in combination with Tailwind CSS</h1>
                </div>
            </div>
        </div>
    )
}

export default About
